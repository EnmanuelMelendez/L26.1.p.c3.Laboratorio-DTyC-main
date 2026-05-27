export default class Cl_mEquipos {
    private _marca: string = "";
    private _procesador: string = "";
    private _memoria: number = 0;
    private _ubicacion: string = "";
    private _estado: string = "";
    private _Id: number = 0;

    constructor(
        {
            marca, 
            procesador, 
            memoria, 
            ubicacion, 
            estado,
            Id
        }: {
            marca: string, 
            procesador: string, 
            memoria: number, 
            ubicacion: string, 
            estado: string,
            Id: number
        }) {
        this._marca = marca;
        this._procesador = procesador;
        this._memoria = memoria;
        this._ubicacion = ubicacion;
        this._estado = estado;
        this._Id = Id;
    }
    set marca(marca: string) {
        this._marca = marca;
    }
    set procesador(procesador: string) {
        this._procesador = procesador;
    }
    set memoria(memoria: number) {
        this._memoria = memoria;
    }
    set ubicacion(ubicacion: string) {
        this._ubicacion = ubicacion;
    }
    set estado(estado: string) {
        this._estado = estado;
    }
    set Id(Id: number) {
        this._Id = Id;
    }
    get marca(): string {
        return this._marca;
    }
    get procesador(): string {
        return this._procesador;
    }
    get memoria(): number {
        return this._memoria;
    }
    get ubicacion(): string {
        return this._ubicacion;
    }
    get estado(): string {
        return this._estado;
    }
    get Id(): number {
        return this._Id;
    }
}