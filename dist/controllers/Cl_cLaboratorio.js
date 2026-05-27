import Cl_mLaboratorios from "../models/Cl_mLaboratorio.js";
import Cl_mEquipos from "../models/Cl_mEquipos.js";
export default class Cl_cLaboratorios {
    mLaboratorios = new Cl_mLaboratorios();
    vLaboratorios;
    cEquipos;
    constructor(vistaLaboratorios, controladorEquipos) {
        this.vLaboratorios = vistaLaboratorios;
        this.cEquipos = controladorEquipos;
        this.cargarDatosHardcodeados();
        this.vLaboratorios.onNuevoEquipo(() => this.procesar1Equipo());
    }
    cargarDatosHardcodeados() {
        const Equipo1 = new Cl_mEquipos({ marca: "Dell", procesador: "Intel Core i5-11400", memoria: 16, ubicacion: "Laboratorio 1", estado: "activo", Id: 1 });
        const Equipo2 = new Cl_mEquipos({ marca: "HP", procesador: "AMD Ryzen 5 5600X", memoria: 32, ubicacion: "Laboratorio 2", estado: "activo", Id: 2 });
        const Equipo3 = new Cl_mEquipos({ marca: "Lenovo", procesador: "Intel Core i7-11700K", memoria: 16, ubicacion: "Laboratorio 3", estado: "en mantenimiento", Id: 3 });
        const Equipo4 = new Cl_mEquipos({ marca: "Asus", procesador: "AMD Ryzen 7 5800X", memoria: 32, ubicacion: "Laboratorio 4", estado: "reportado", Id: 4 });
        const Equipo5 = new Cl_mEquipos({ marca: "Acer", procesador: "Intel Core i3-10100", memoria: 8, ubicacion: "Laboratorio 5", estado: "activo", Id: 5 });
        const Equipo6 = new Cl_mEquipos({ marca: "MSI", procesador: "AMD Ryzen 9 5900X", memoria: 64, ubicacion: "Laboratorio 6", estado: "activo", Id: 6 });
        this.mLaboratorios.agregarEquipo(Equipo1);
        this.mLaboratorios.agregarEquipo(Equipo2);
        this.mLaboratorios.agregarEquipo(Equipo3);
        this.mLaboratorios.agregarEquipo(Equipo4);
        this.mLaboratorios.agregarEquipo(Equipo5);
        this.mLaboratorios.agregarEquipo(Equipo6);
        this.actualizarVista();
    }
    procesar1Equipo() {
        this.cEquipos.solicitarEquipo((equipo) => {
            if (equipo !== null) {
                this.mLaboratorios.agregarEquipo(equipo);
                this.actualizarVista();
            }
        });
    }
    reportarFalla(id) {
        // Usar el método del modelo procesador (Cl_mLaboratorios)
        const equipo = this.mLaboratorios.obtenerEquipo(id);
        if (equipo && this.mLaboratorios.puedeReportarEquipo(id)) {
            if (confirm(`¿Desea reportar falla en el equipo ${equipo.marca} (ID: ${equipo.Id})?`)) {
                const exito = this.mLaboratorios.reportarFallaEquipo(id);
                if (exito) {
                    this.actualizarVista();
                    alert(`Equipo ${equipo.marca} reportado como dañado exitosamente.`);
                }
            }
        }
        else {
            alert(`Solo se pueden reportar equipos en estado "activo". Este equipo está "${equipo?.estado || 'desconocido'}".`);
        }
    }
    eliminarEquipo(id) {
        const equipo = this.mLaboratorios.obtenerEquipo(id);
        if (!equipo) {
            alert("El equipo no existe");
            return;
        }
        // Confirmar con el usuario antes de eliminar
        const confirmar = confirm(`¿Está seguro que desea eliminar el equipo?\n\n` +
            `Marca: ${equipo.marca}\n` +
            `ID: ${equipo.Id}\n` +
            `Estado: ${equipo.estado}\n\n` +
            `Esta acción no se puede deshacer.`);
        if (confirmar) {
            // Usar el método del modelo para eliminar
            const resultado = this.mLaboratorios.eliminarEquipoConValidacion(id);
            if (resultado.exito) {
                this.actualizarVista();
                alert(resultado.mensaje);
            }
            else {
                alert(`No se pudo eliminar: ${resultado.mensaje}`);
            }
        }
    }
    actualizarVista() {
        const equiposOrdenados = this.mLaboratorios.obtenerEquiposOrdenados();
        this.vLaboratorios.mostrarEquipo({
            equipos: equiposOrdenados,
            onReportarFalla: (id) => this.reportarFalla(id),
            onEliminarEquipo: (id) => this.eliminarEquipo(id)
        });
    }
}
//# sourceMappingURL=Cl_cLaboratorio.js.map