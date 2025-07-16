const Chismosa = require('./Chismosa');

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion = 5, nivelChisme = 0) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");

        const incremento = 0.5 + Math.random();
        const nuevoNivel = Math.min(10, this.getNivelChisme() + incremento);
        this.setNivelChisme(nuevoNivel);
    }

    contarChisme() {
        console.log("Comenta el chisme como ejemplo de vida en el trabajo");

        const reputacionGanada = 1 + Math.random();
        const nuevaReputacion = Math.min(10, this.getReputacion() + reputacionGanada);
        this.setReputacion(nuevaReputacion);

        const chismeExtra = Math.random(); // 0 a 1
        const nuevoNivel = Math.min(10, this.getNivelChisme() + chismeExtra);
        this.setNivelChisme(nuevoNivel);
    }
}

module.exports = CompaneraCuriosa;
