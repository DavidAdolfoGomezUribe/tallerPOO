
const kleur = require('kleur');
const readline = require('readline');
const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');


const chismosas = [
  new TiaVecina("Gloria"),
  new CompaneraCuriosa("Sara"),
  new EstudianteEspia("Juliana")
];


function simularRondas(cantidad) {
  console.log(kleur.bold(`\nSimulando ${cantidad} ronda(s) para todas las chismosas:`));
  for (let i = 1; i <= cantidad; i++) {
    console.log(kleur.underline(`\n-- Ronda ${i} --`));
    chismosas.forEach(chismosa => {
      console.log(kleur.bold(`\nSimulación para ${chismosa.nombre}:`));
      chismosa.recolectarInfo();
      chismosa.contarChisme();
    });
  }
  mostrarResultados();
}

function mostrarResultados() {
  console.log(kleur.bold("\nResultados finales:"));
  chismosas.forEach(chismosa => {
    const nivel = chismosa.getNivelChisme();
    const reputacion = chismosa.getReputacion();

    const nivelColor = nivel >= 5.5
      ? kleur.magenta
      : kleur.white;
    const reputacionColor = reputacion <= 3
      ? kleur.gray
      : reputacion >= 6
        ? kleur.yellow
        : kleur.white;

    console.log(
      `${kleur.bold(chismosa.nombre)} → ` +
        `Nivel de chisme: ${nivelColor(nivel.toFixed(2))}, ` +
        `Reputación: ${reputacionColor(reputacion.toFixed(2))}`
    );
  });

const viral = chismosas.reduce((prev, curr) =>
    curr.getNivelChisme() > prev.getNivelChisme() ? curr : prev
  );
  console.log(kleur.bold(`\nChisme más viral: ${viral.nombre} con nivel ${viral.getNivelChisme().toFixed(2)}`));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log(kleur.bold(`\n=== Menú de Chismosas ===`));
  console.log("1) Simular 1 ronda");
  console.log("2) Simular 2 rondas");
  console.log("3) Salir");
  rl.question("Seleccione una opción: ", opcion => {
    switch (opcion.trim()) {
      case '1':
        simularRondas(1);
        return mostrarMenu();
      case '2':
        simularRondas(2);
        return mostrarMenu();
      case '3':
        console.log("Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción inválida. Intente de nuevo.");
        return mostrarMenu();
    }
  });
}

mostrarMenu();
