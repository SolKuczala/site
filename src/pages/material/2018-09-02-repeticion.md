---
templateKey: material
title: '[JS #6] Repetición'
date: 2018-09-06T15:00:00.000Z
description: Introducción a bucles.
type: js
---
A veces queremos repetir cierto comportamiento mientras algo ocurra o una cantidad fija de veces.

Es muy común este uso para interacciones con el usuario, creación de componentes o animaciones.

### while
Es una forma intuitiva de repetir la ejecución de un bloque de código, mientras que una condición que nosotros le especificamos se cumpla. Se puede leer y entender fácilmente como "mientras se cumpla esto, ejecutá este bloque".

#### Sintaxis
```javascript
while (/* <condición> */) {
  /* Bloque de código */
}
```

Les dejo un ejemplo más acercado a la realidad para que se entienda:
```javascript
function esValida (texto) {
  return (typeof texto === 'string') && (texto.length > 0);
}

var acumulador = 0;
var contador = 0;
var edad = Number.MAX_VALUE;

while (edad > 17 || contador > 10) {
  var respuesta = prompt('Ingrese su edad');
  if (!esValida(respuesta)) break;
  edad = Number.parseInt(respuesta);
  acumulador += edad;
  contador++;
}

console.log('El promedio de edades mayores fue de: ' + (acumulador / contador));
```

Si querés podés ejecutarlo en la consola para ver qué hace.

Lo que hacemos en el ejemplo anterior es preguntar en un `prompt` la edad de la persona, hasta que la edad ingresada sea menor a 18, o se hayan ingresado 10 veces la edad, o no sea válido el valor ingresado.

Entonces para que no itere infinitamente, si tenemos una variable en la condición, dentro del bloque de código por lo general vamos a querer actualizar su valor para que no cumpla con la condición y salga en algún momento. En el ejemplo anterior tenemos 2 variables especificadas en la condición que se van actualizando, de no irse actualizando no tendrían sentido de ser especificadas en la condición.

Pero también se puede salir del bucle por otro motivo, si no es válido el valor ingresado, entonces se hace un `break`. Cuando se hace un `break` no se vuelve a evaluar la condición, sino que sale directamente del `while` y sigue ejecutando lo que le sigue.

En mi opinión, el `break` puede ser difícil de ver, y quizás sea mejor ponerlo en el condicional para saber que si un valor es ingresado incorrectamente sale del bucle, solo viendo la línea del `while`, aunque no es una variable que se vaya actualizando constantemente, por lo que al ser un caso excepcional, puede que esté bien dejarlo así.

### for
En el `while` dijimos que por lo general teníamos variables en la condición, y que se van actualizando para evaluar por cada iteración si la condición se sigue cumpliendo o no, en caso de cumplirse ejecuta el bloque de código que se le pasa, sino no.

Dado que generalmente hacemos bucles de esta forma, tenemos el `for` para estos casos:

### Sintaxis
```javascript
for (/* <inicialización> */; /* <condición> */; /* <actualización> */) {
  /* Bloque de código */
}
```

Como vemos en un `for` tenemos 3 sentencias entre los paréntesis, separadas por un `;`. La primera se ejecuta al inicio del `for`, se suele usar para declarar y asignarles un valor inicial a las variables que se van a ir actualizando. La segunda sentencia es una expresión que evaluada retorna un valor booleano, indicando si se sigue iterando o no. La tercer sentencia es una en la que generalmente se actualizan las variables que se evalúan en la condición.

Entonces ahora tenemos el caso específico que mencionamos del `while` que un poco más ordenado en el `for`. En 1 línea podemos ver qué valores se tienen en cuenta para seguir o no iterando.

El caso más común para usar for, es para recorrer listas:
```javascript
var numeros = [2, 1, 9, 5, 6];
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```

Si tenemos más de 1 variable que actualizar y evaluar, podemos usar una expresión de este estilo:
```javascript
var numeros = [2, 1, 9, 5, 6];
for (var i = 0, j = numeros.length - 1; i !== j; i++, j--) {
  console.log('Resta #' + i + ': ' + (numeros[i] - numeros[j]));
}
```

También podemos hacer un `break` en nuestro bucle como hicimos en el `while` para cortar la ejecución.

Si quieren saber más acerca de iteraciones, les recomiendo leer la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n).
