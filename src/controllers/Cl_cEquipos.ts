import { I_vEquipos } from "../interfaces/I_vEquipos.js";
import Cl_mEquipos from "../models/Cl_mEquipos.js";

export default class Cl_cEquipos {
    private vista: I_vEquipos;
    private callback!: (equipos: Cl_mEquipos | null) => void;
    
    constructor(vista: I_vEquipos) {
        this.vista = vista;
        this.vista.onAgregar(() => this.btAgregarOnClick());
        this.vista.onVolver(() => this.btCancelarOnClick());
    }
    
    solicitarEquipo(callback: (equipos: Cl_mEquipos | null) => void) {
        this.callback = callback;
        this.vista.mostrar();
    }
    
    private btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    
    private btAgregarOnClick() {
        if (!this.vista.Marca || !this.vista.Procesador || !this.vista.Ubicacion || !this.vista.Estado) {
            alert("Por favor complete todos los campos");
            return;
        }
        if (this.vista.Memoria <= 0 || this.vista.Id <= 0) {
            alert("Memoria e ID deben ser mayores a 0");
            return;
        }
        this.callback(
            new Cl_mEquipos({
                marca: this.vista.Marca,
                procesador: this.vista.Procesador,
                memoria: this.vista.Memoria,
                ubicacion: this.vista.Ubicacion,
                estado: this.vista.Estado,
                Id: this.vista.Id
            }),
        );
        this.vista.ocultar();
    }
}