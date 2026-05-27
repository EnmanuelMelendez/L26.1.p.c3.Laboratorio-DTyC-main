import Cl_mEquipos from "./Cl_mEquipos.js";

export default class Cl_mLaboratorios {
    public equipos: Cl_mEquipos[] = [];

    agregarEquipo(equipo: Cl_mEquipos): void {
        this.equipos.push(equipo);
    }
    // Método para reportar falla de un equipo por ID
    reportarFallaEquipo(id: number): boolean {
        const equipo = this.equipos.find(e => e.Id === id);
        if (equipo && equipo.estado.toLowerCase() === 'activo') {
            equipo.estado = 'reportado';
            return true;
        }
        return false;
    }
    
    // Método para verificar si un equipo puede ser reportado
    puedeReportarEquipo(id: number): boolean {
        const equipo = this.equipos.find(e => e.Id === id);
        return equipo !== undefined && equipo.estado.toLowerCase() === 'activo';
    }
    
    // Método para obtener un equipo por ID
    obtenerEquipo(id: number): Cl_mEquipos | undefined {
        return this.equipos.find(e => e.Id === id);
    }
    
    // Método para obtener todos los equipos ordenados por estado
    obtenerEquiposOrdenados(): Cl_mEquipos[] {
        const ordenEstados: { [key: string]: number } = {
            "activo": 1,
            "reportado": 2,
            "en mantenimiento": 3
        };
        
        return [...this.equipos].sort((a, b) => {
            const ordenA = ordenEstados[a.estado.toLowerCase()] || 999;
            const ordenB = ordenEstados[b.estado.toLowerCase()] || 999;
            return ordenA - ordenB;
        });
    }
    eliminarEquipo(id: number): boolean {
        const indice = this.equipos.findIndex(equipo => equipo.Id === id);
        if (indice !== -1) {
            this.equipos.splice(indice, 1);
            return true;
        }
        return false;
    }
    
    eliminarEquipoConValidacion(id: number): { exito: boolean; mensaje: string } {
        const equipo = this.obtenerEquipo(id);
        
        if (!equipo) {
            return { exito: false, mensaje: "El equipo no existe" };
        }
        if (equipo.estado.toLowerCase() === 'en mantenimiento') {
            return { exito: false, mensaje: "No se puede eliminar un equipo en mantenimiento" };
        }
        
        const indice = this.equipos.findIndex(e => e.Id === id);
        if (indice !== -1) {
            this.equipos.splice(indice, 1);
            return { exito: true, mensaje: "Equipo eliminado correctamente" };
        }
        
        return { exito: false, mensaje: "Error al eliminar el equipo" };
    }

}