---
templateKey: material
title: '[JS #4] Funciones'
date: 2018-09-04T15:00:00.000Z
description: Introducción a funciones.
type: js
---
### Partes
1. *Identificador*: nombre que elijo para identificar la función y llamarla luego, como una variable.
2. [*Parámetros*]: las entradas que puede tener una función, puede que no te pasen parámetros a la hora de ejecución, entonces en ese caso los valores que van a tener los parámetros van a ser `undefined`.
3. *Bloque de código*: líneas de código (o sentencias) que voy a ejecutar cuando se llame a la función.
4. [*Retorno*]: valor de retorno que tendrá la función, si no se especifica un `return` dentro del bloque de código, implícitamente la función va a retornar `undefined`. Cuando se hace un `return` en una función, el código que le sigue no se ejecuta, sino que sale con ese valor de retorno.

### Sintaxis
```javascript
/**
 * Para asegurarnos de entender las partes de nuestra función, podemos "indentar" nuestro código.
 * Dejando un tab o espacios cada vez que entro 1 "nivel" más adentro de algo, por ejemplo, el bloque
 * de código dentro de la función, no debería estar al mismo nivel, sino que debería tener 2 o 4 espacios
 * o 1 para indicar que no se encuentra al mismo nivel que la definición de la función.
 * Es como cuando escribimos nuestro HTML.
 *
 * Si el nombre de la función no es lo suficientemente expresiva,
 * se suelen agregar comentarios para indicar qué hace la función.
 */
function nombreDeLaFuncion () {
  /*
   * Acá van las sentencias que quiera ejecutar.
   */
  console.log('hola');
  console.log('qué tal');
}

function sumar(n1, n2) {
  return n1 + n2;
}
```

### Ejecución
Dijimos que cuando se define una función no se le pasan valores, sino a la hora de ejecutar esa función. Tiene la siguiente sintaxis:
```javascript
/**
 * Cuando se ejecuta una función, siempre se la llama entre paréntesis con los parámetros que va a recibir,
 * los paréntesis deben estar al lado del nombre de la función y los parámetros separados por una coma.
 * Si una función no tiene parámetros, no se le pasa nada entre paréntesis, pero igualmente deben estar.
 */
nombreDeLaFuncion();
// muestra por pantalla "hola"
// muestra por pantalla "qué tal"
//> no retorna nada.

sumar(1, 2); //> retorna 3.
```

### Tener en cuenta
* Las funciones son valores. Entonces la podemos asignar a variables, índice de una lista, atributo de un objeto, etc.
* El retorno de una función no es lo mismo que un `console.log()`. Quizás cuando evaluamos expresiones desde la consola nos confunde el resultado que vemos en pantalla. Esto es porque el valor de retorno también se muestra en la consola, e ignoramos el `undefined` que nos da abajo de ese `console.log()`. Cuando le definimos un retorno a una función podemos pensar en que cuando se evalúa esa expresión, se reemplaza por su valor de retorno. Entonces podemos hacer cosas de este estilo: `mayorDe(mayorDe(3, 5), 9)` ya que al no imprimir en pantalla y generar un retorno, podemos pasarle ese retorno (valor) a otros lados, como en este caso, un parámetro en la ejecución de una función.

Para mostrar que una función es un valor, puedo asignarlo a una variable:
```js
const sumar = function (n1, n2) {
  return n1 + n2;
};

sumar(1, 2) //> 3
```

Incluso podría pasar una función por parámetro:
```javascript
const saludoAmistoso = function (nombre) {
  return "Hola " + nombre + "!";
};

const saludoAtendedor = function (nombre) {
  return "Y a vos quién te conoce papá?"
};

const saludarANorman = function (saludo) {
  saludo("Norman");
};

console.log(saludarANorman(saludoAmistoso));
// muestra por consola "Hola Norman!"

console.log(saludarANorman(saludoAtendedor));
// muestra por consola "Y a vos quién te conoce papá?"
```

También podría definir un array de funciones o definirla a un atributo de un objeto.
```javascript
const Norman = {
  nombre: "Norman",
  saludar: function (persona) {
    return "Hola " + persona.nombre + "!";
  }
};

const Atendedor = {
  nombre: "Atendedor",
  saludar: function (nombre) {
    return "Y a vos quién te conoce papá?";
  }
}

console.log(Norman.saludar(Atendedor));
// muestra por consola "Hola Atendedor!"

console.log(Atendedor.saludar(Norman));
// muestra por consola "Y a vos quién te conoce papá?"
```

Si ven no le di un nombre a la función, pero no importa, porque al haberla asignado a `sumar` puedo referenciarla por el nombre de esa variable y ejecutarla.

### [Extra] Estrategia para resolver ejercicios de funciones.
1. Escribir la definición de una función, sin nada de código adentro. Con varios espacios en el bloque de código. No hace falta darle un nombre. Entonces escribiría algo como: `function () {}` con espacios y saltos de línea.
2. Definir los parámetros de entrada que va a tener la función y escribirlas en los paréntesis. Los parámetros son una forma de identificar los valores que nos pasan CUANDO SE EJECUTA la función, o sea que por ahora van a ser nombres de variables nada más.
3. Definir el tipo de salida que va a tener una función y las posibles salidas.
4. Ahora que entendemos eso, nos ponemos a ver cómo resolver el problema, empezando por un caso base y siguiendo por otros particulares, hasta poder generalizarlo en una solución para todos los casos posibles.

Si quieren leer más acerca de funciones, pueden leer la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones).
