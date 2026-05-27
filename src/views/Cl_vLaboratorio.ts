import { I_vLaboratorios } from "../interfaces/I_vLaboratorio.js";
import Cl_mEquipos from "../models/Cl_mEquipos.js";

const html = String.raw

export default class Cl_vLaboratorios implements I_vLaboratorios {
    tbEquipos: HTMLTableElement;
    btNuevoEquipo: HTMLButtonElement;
    vista: HTMLElement | null;
    
    constructor() {
        this.vista = document.getElementById("laboratorios");
        this.tbEquipos = document.getElementById("Laboratorio_tbEquipos") as HTMLTableElement;
        this.btNuevoEquipo = document.getElementById("Laboratorio_btnNuevoEquipo") as HTMLButtonElement;
    }
    
    onNuevoEquipo(callback: () => void): void {
        this.btNuevoEquipo.onclick = callback;
    }
    
    mostrarEquipo({ equipos, onReportarFalla, onEliminarEquipo }: { 
        equipos: Cl_mEquipos[];
        onReportarFalla?: (id: number) => void;
        onEliminarEquipo?: (id: number) => void;
    }): void {
        const tbody = this.tbEquipos.getElementsByTagName('tbody')[0];
        if (tbody) {
            tbody.innerHTML = "";
            equipos.forEach((equipo) => {
                const tr = document.createElement("tr");
                const estadoClass = `estado-${equipo.estado.toLowerCase().replace(/ /g, '-')}`;
                tr.className = estadoClass;
                
                tr.innerHTML = html`
                    <td>${equipo.marca}</td>
                    <td>${equipo.procesador}</td>
                    <td>${equipo.memoria}</td>
                    <td>${equipo.ubicacion}</td>
                    <td>${equipo.estado}</td>
                    <td>${equipo.Id}</td>
                    <td>
                        ${equipo.estado.toLowerCase() === 'activo' ? 
                            `<button class="btn-reportar" data-id="${equipo.Id}">Reportar Falla</button>` : 
                            '<span style="color: gray; font-size: 0.9em;">No disponible</span>'}
                    </td>
                    <td>
                        <button class="btn-eliminar" data-id="${equipo.Id}" data-marca="${equipo.marca}">🗑️ Eliminar</button>
                    </td>
                    </tr>
                `;
                tbody.appendChild(tr);
            });
            
            // Agregar eventos a los botones de reportar
            if (onReportarFalla) {
                const botones = tbody.querySelectorAll('.btn-reportar');
                botones.forEach(boton => {
                    boton.addEventListener('click', (e) => {
                        const id = parseInt((e.target as HTMLButtonElement).getAttribute('data-id') || '0');
                        onReportarFalla(id);
                    });
                });
            }
        // Agregar eventos a los botones de eliminar
            if (onEliminarEquipo) {
                const botonesEliminar = tbody.querySelectorAll('.btn-eliminar');
                botonesEliminar.forEach(boton => {
                    boton.addEventListener('click', (e) => {
                        const id = parseInt((e.target as HTMLButtonElement).getAttribute('data-id') || '0');
                        const marca = (e.target as HTMLButtonElement).getAttribute('data-marca') || '';
                        onEliminarEquipo(id);
                    });
                });
            }
        }
    }
    
    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
    }
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
    }
}