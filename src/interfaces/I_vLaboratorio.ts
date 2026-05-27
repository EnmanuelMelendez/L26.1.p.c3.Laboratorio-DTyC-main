import Cl_mEquipos from "../models/Cl_mEquipos.js";

export interface I_vLaboratorios {
    onNuevoEquipo(callback: () => void): void;
    mostrarEquipo({
        equipos,
        onReportarFalla,
        onEliminarEquipo
    }: {
        equipos: Cl_mEquipos[];
        onReportarFalla?: (id: number) => void;
        onEliminarEquipo?: (id: number) => void;
    }): void;
    mostrar(): void;
    ocultar(): void;
}