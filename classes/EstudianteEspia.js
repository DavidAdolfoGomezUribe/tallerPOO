const Chismosa = require('./Chismosa');

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion = 1, nivelChisme = 2) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log("Lee chats ajenos desde el último puesto del salón");

        // Aumenta el nivel del chisme rápidamente: entre 2 y 4
        const incremento = 2 + Math.random() * 2;
        const nuevoNivel = Math.min(10, this.getNivelChisme() + incremento);
        this.setNivelChisme(nuevoNivel);
    }

    contarChisme() {
        console.log("Filtra el chisme por estados en WhatsApp");

        // Aumenta nivel del chisme rápidamente: entre 1.5 y 3
        const incremento = 1.5 + Math.random() * 1.5;
        const nuevoNivel = Math.min(10, this.getNivelChisme() + incremento);
        this.setNivelChisme(nuevoNivel);

        // Puede perder reputación con un 40% de probabilidad
        if (Math.random() < 0.4) {
            console.log("Fue descubierta espiando... pierde reputación");
            const perdida = 1 + Math.random() * 2; // entre 1 y 3
            const nuevaReputacion = Math.max(0, this.getReputacion() - perdida);
            this.setReputacion(nuevaReputacion);
        }
    }
}

module.exports = EstudianteEspia;
