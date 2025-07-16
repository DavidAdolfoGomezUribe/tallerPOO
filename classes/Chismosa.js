//clase abstracta
class Chismosa {
    #reputacion;
    #nivelChisme;

    constructor(nombre, reputacion = 0, nivelChisme = 0) {
        if (this.constructor === Chismosa) {
            throw new Error("No puedes instanciar la clase abstracta Chismosa directamente");
        }

        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    recolectarInfo() {
        throw new Error("No es posible llamar este método desde la clase padre");
    }

    contarChisme() {
        throw new Error("No es posible llamar este método desde la clase padre");
    }

    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    setReputacion(reputacion) {
        this.#reputacion = reputacion;
    }

    setNivelChisme(nivelChisme) {
        this.#nivelChisme = nivelChisme;
    }
}

module.exports = Chismosa;