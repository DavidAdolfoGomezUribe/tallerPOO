# Simulador de Chismosas 🗣️

Este proyecto es una simulación en Node.js que modela a diferentes tipos de "chismosas" usando programación orientada a objetos (POO). Cada chismosa tiene su propia personalidad y estrategia para recolectar información y difundir chismes, lo que afecta su **nivel de chisme** y **reputación**.

## 📦 Requisitos

* Node.js instalado
* Ejecutar `npm install kleur` para los estilos de consola

## 🚀 Ejecución

```bash
node index.js
```

## 📋 Menú de opciones

Cuando ejecutas el programa, verás un menú interactivo:

1. Simular 1 ronda
2. Simular 2 rondas
3. Salir

Cada ronda simula a todas las chismosas recolectando información y difundiendo un chisme. Luego se muestran los resultados con estilos de color:

* **Magenta**: Chismes virales (nivel alto)
* **Amarillo**: Reputación alta
* **Gris**: Reputación baja

También se muestra al final cuál chismosa fue la más viral.

---

## 🧱 Estructura de Clases

### Clase Abstracta: `Chismosa`

* Propiedades privadas:

  * `#reputacion` (0 a 10)
  * `#nivelChisme` (0 a 10)

* Constructor: `nombre, reputacion, nivelChisme`

* Métodos:

  * `recolectarInfo()` → abstracto (debe implementarse en subclases)
  * `contarChisme()` → abstracto
  * `getReputacion()`
  * `getNivelChisme()`
  * `setReputacion(valor)`
  * `setNivelChisme(valor)`

> No puede instanciarse directamente. Sus métodos abstractos deben ser sobrescritos.

---

## 🧑‍🤝‍🧑 Subclases

### `TiaVecina`

* `recolectarInfo()` → "Aprovecha la reunión del barrio para escuchar discretamente"
* `contarChisme()` → "Difunde el chisme mientras ofrece café"
* Nivel de chisme sube rápido (hasta +5), pero puede perder reputación si exagera.

### `CompaneraCuriosa`

* `recolectarInfo()` → "Hace preguntas aparentemente profesionales a los compañeros de trabajo"
* `contarChisme()` → "Comenta el chisme como ejemplo de vida en el trabajo"
* Su reputación sube, pero el chisme crece lentamente.

### `EstudianteEspia`

* `recolectarInfo()` → "Lee chats ajenos desde el último puesto del salón"
* `contarChisme()` → "Filtra el chisme por estados en WhatsApp"
* El nivel del chisme sube rápido, pero puede ser descubierta y perder reputación.

---

## 📁 Estructura del Proyecto

```
📁 proyecto/
├── classes/
│   ├── Chismosa.js
│   ├── TiaVecina.js
│   ├── CompaneraCuriosa.js
│   └── EstudianteEspia.js
├── README.md
├── index.js
└── package.json
```

---

## ✨ Créditos

Creado como ejercicio de programación orientada a objetos en Node.js. Ideal para practicar clases, herencia, encapsulamiento y menús interactivos en consola.
