export interface I_vEquipos {
    get Marca(): string;
    get Procesador(): string;
    get Memoria(): number;
    get Ubicacion(): string;
    get Estado(): string;
    get Id(): number;
    mostrar(): void;
    ocultar(): void;
    onAgregar(callback: () => void): void;
    onVolver(callback: () => void): void;
}