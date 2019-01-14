---
templateKey: material
title: '[JS #5] Condicionales'
date: 2018-09-05T15:00:00.000Z
description: Introducción a condicionales.
type: js
---
Este es uno de los operadores básicos para definir la lógica de ejecución de nuestro programa.

Básicamente el operador `if` se puede traducir en "Si para esto, hace tal cosa, sino...".

1 `if` solamente tiene 2 caminos posibles, el del verdadero `true` o el de `false`. Si en mi programa tengo más caminos posibles, voy a necesitar de otros `if`s, como por ejemplo si tengo 3 caminos posibles de ejecución.

### Partes
1. Condición: va entre paréntesis, es una expresión javascript que al ser evaluada, debe retornar un valor Booleano, verdadero o falso.
2. Bloque de código por verdadero: si la condición es verdadera, se ejecuta el primer bloque inmediato que le sigue a la condición.
3. Bloque de código por falso: es un parámetro opcional, este es el código que se ejecuta si la condición evaluada resultó en falsa.

### Sintaxis
```javascript
if (/* <condición 1> */) {
  // hacer camino 1
} else if (/* <condición 2> */) {
  // hacer camino 2
} else {
  // hacer camino 3
}

// si solo me interesa hacer algo si algo se cumple, no hace falta escribir un else.
if (/* <condición */) {
  // hacer algo
}
```

Si querés leer más acerca de ifs, pueden leer más en la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else).
