export default class Cl_mEquipos {
    _marca = "";
    _procesador = "";
    _memoria = 0;
    _ubicacion = "";
    _estado = "";
    _Id = 0;
    constructor({ marca, procesador, memoria, ubicacion, estado, Id }) {
        this._marca = marca;
        this._procesador = procesador;
        this._memoria = memoria;
        this._ubicacion = ubicacion;
        this._estado = estado;
        this._Id = Id;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set procesador(procesador) {
        this._procesador = procesador;
    }
    set memoria(memoria) {
        this._memoria = memoria;
    }
    set ubicacion(ubicacion) {
        this._ubicacion = ubicacion;
    }
    set estado(estado) {
        this._estado = estado;
    }
    set Id(Id) {
        this._Id = Id;
    }
    get marca() {
        return this._marca;
    }
    get procesador() {
        return this._procesador;
    }
    get memoria() {
        return this._memoria;
    }
    get ubicacion() {
        return this._ubicacion;
    }
    get estado() {
        return this._estado;
    }
    get Id() {
        return this._Id;
    }
}
//# sourceMappingURL=Cl_mEquipos.js.map