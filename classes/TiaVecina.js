const Chismosa = require('./Chismosa');

class TiaVecina extends Chismosa {
    constructor(nombre, reputacion = 1, nivelChisme = 3) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log("Aprovecha la reunión del barrio para escuchar discretamente");

        const incremento = 2 + Math.random() * 2;
        const nuevoNivel = Math.min(10, this.getNivelChisme() + incremento);
        this.setNivelChisme(nuevoNivel);
    }

    contarChisme() {
        console.log("Difunde el chisme mientras ofrece café");

        const incremento = 2 + Math.random() * 2;
        const nuevoNivel = Math.min(10, this.getNivelChisme() + incremento);
        this.setNivelChisme(nuevoNivel);

        if (nuevoNivel > 7) {
            const perdida = 1 + Math.random() * 2;
            const nuevaReputacion = Math.max(0, this.getReputacion() - perdida);
            this.setReputacion(nuevaReputacion);
        }
    }
}

module.exports = TiaVecina;
