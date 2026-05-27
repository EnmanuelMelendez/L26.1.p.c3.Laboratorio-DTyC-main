export default class Cl_vEquipos {
    inMarca;
    inProcesador;
    inMemoria;
    inUbicacion;
    inEstado;
    inId;
    btnAgregar;
    btnvolver;
    vista;
    constructor() {
        this.vista = document.getElementById("equipos");
        this.inMarca = document.getElementById("equipos_marca");
        this.inProcesador = document.getElementById("equipos_procesador");
        this.inMemoria = document.getElementById("equipos_memoria");
        this.inUbicacion = document.getElementById("equipos_ubicacion");
        this.inEstado = document.getElementById("equipos_estado");
        this.inId = document.getElementById("equipos_id");
        this.btnAgregar = document.getElementById("equipos_btAceptar");
        this.btnvolver = document.getElementById("equipos_btCancelar");
    }
    get Marca() {
        return this.inMarca.value;
    }
    get Procesador() {
        return this.inProcesador.value;
    }
    get Memoria() {
        return +this.inMemoria.value;
    }
    get Ubicacion() {
        return this.inUbicacion.value;
    }
    get Estado() {
        return this.inEstado.value;
    }
    get Id() {
        return +this.inId.value;
    }
    onAgregar(callback) {
        this.btnAgregar.onclick = callback;
    }
    onVolver(callback) {
        this.btnvolver.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEquipos.js.map