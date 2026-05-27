import { I_vEquipos } from "../interfaces/I_vEquipos.js";

export default class Cl_vEquipos implements I_vEquipos {
    inMarca: HTMLInputElement;
    inProcesador: HTMLInputElement;
    inMemoria: HTMLInputElement;
    inUbicacion: HTMLInputElement;
    inEstado: HTMLInputElement;
    inId: HTMLInputElement;
    btnAgregar: HTMLButtonElement;
    btnvolver: HTMLButtonElement;
    vista: HTMLElement;
    
    constructor() {
        this.vista = document.getElementById("equipos") as HTMLElement;
        this.inMarca = document.getElementById("equipos_marca") as HTMLInputElement;
        this.inProcesador = document.getElementById("equipos_procesador") as HTMLInputElement;
        this.inMemoria = document.getElementById("equipos_memoria") as HTMLInputElement;
        this.inUbicacion = document.getElementById("equipos_ubicacion") as HTMLInputElement;
        this.inEstado = document.getElementById("equipos_estado") as HTMLInputElement;
        this.inId = document.getElementById("equipos_id") as HTMLInputElement;
        this.btnAgregar = document.getElementById("equipos_btAceptar") as HTMLButtonElement;
        this.btnvolver = document.getElementById("equipos_btCancelar") as HTMLButtonElement;
    }
    
    get Marca(): string {
        return this.inMarca.value;
    }
    get Procesador(): string {
        return this.inProcesador.value;
    }
    get Memoria(): number {
        return +this.inMemoria.value;
    }
    get Ubicacion(): string {
        return this.inUbicacion.value;
    }
    get Estado(): string {
        return this.inEstado.value;
    }
    get Id(): number {
        return +this.inId.value;
    }
    
    onAgregar(callback: () => void): void {
        this.btnAgregar.onclick = callback;
    }
    onVolver(callback: () => void): void {
        this.btnvolver.onclick = callback;
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