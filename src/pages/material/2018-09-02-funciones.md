---
templateKey: material
title: '[JS #4] Resumen Funciones'
date: 2018-09-04T15:00:00.000Z
description: Resumen básico de funciones.
type: js
---
### Intro
Las funciones son geniales. Otro gran tema de JS y difícil de entender al principio.

Las funciones nos van a simplificar el desarrollo al agrupar sentencias de nuestro programa, con un nombre al que vamos a poder llamar para ejecutarlas.

Entonces nos ahorra reescribir las mismas sentencias, ya que puedo agrupar ese comportamiento en una función y llamarla en 1 línea cuando quiera.

### La primer función
Supongamos que queremos obtener el nombre de una persona e imprimirlo por pantalla. Podríamos hacer esto:

```javascript
const nombre = prompt("Ingrese su nombre, por favor...");
console.log(nombre);
```

Ahora, qué pasa si esto lo repetimos varias veces por nuestro programa?

Quizás podríamos agrupar esto en una función:

```javascript
function pedirYMostrarNombre() {
  const nombre = prompt("Ingrese su nombre, por favor...");
  console.log("Hola! " + nombre);
}

// suponiendo que respondo con "Norman" al prompt...

// ahora puedo llamar a la función que definí arriba por su nombre, cada vez que quiera ejecutarla.
pedirYMostrarNombre(); //> "Hola! Norman"
```

Si te perdiste con la sintaxis no te preocupes.

#### Sintaxis
La función que declaramos recién consta de:
1. una palabra reservada `function`, la cual usamos para iniciar la declaración de una función.
2. un nombre o identificador `pedirYMostrarNombre`, que como una variable, podemos referenciar luego para, en este caso, ejecutarla.
3. `()`, por ahora vamos a decir que es algo de la sintaxis que se pone después del nombre. Eso tiene un significado, pero será relevado luego.
4. `{}`, entre estos corchetes se escriben las sentencias que va a ejecutar la función. Puede ser 1 o miles, pero por la sanidad mental del que lea la función, recomiendo que la función no tenga más de 10 líneas... si hay que hacer más funciones, no hay problema.

### La segunda función
Y qué pasa si ahora quiero cambiar algo entre las funciones? Por ejemplo que muestre distintos mensajes de bienvenida.

Bueno, para eso podemos definir la función con un **parámetro**. El parámetro es una variable dentro de la función que se define cuando se la llama.

Este es un concepto muy difícil de entender al principio.

Cuando declaro la función yo voy a hacer referencia a una "variable". El cuál desconozco su valor. El valor que tenga va a ser el que me ingresen cuando se ejecute esa función.

Puesto en código:

```javascript
// voy a tratar a "mensaje" como una variable más.
// desconozco su valor
function pedirYMostrarNombre(mensaje) {
  const nombre = prompt("Ingrese su nombre, por favor...");

  console.log(mensaje + nombre);
}

// suponiendo que siempre respondo con "Norman" al prompt...

// ahora cuando llame a la función le puedo ingresar un valor a "mensaje".
pedirYMostrarNombre("Buenas, qué tal? "); //> "Buenas, qué tal? Norman"

// puedo probar de ejecutarla de nuevo pero ahora pasándole otro valor como parámetro.
pedirYMostrarNombre("Buen día señor "); //> "Buen día señor Norman"
```

Genial! Y qué pasa si quiero tener más de 1 parámetro?

Simplemente tengo que separar los parámetros entre paréntesis.

```javascript
function pedirYMostrarNombre(saludo, nombre, despedida) {
  console.log(saludo + nombre);
  console.log(despedida);
}
```

Probalo en consola!

### Partes
La función que declaramos recién consta de:
1. una palabra reservada `function`, la cual usamos para iniciar la declaración de una función.
2. un nombre o identificador `pedirYMostrarNombre`, que como una variable, podemos referenciar luego para, en este caso, ejecutarla.
3. `()`, entre estos paréntesis van a ir los parámetros que tenga la función.
4. `{}`, entre estos corchetes se escriben las sentencias que va a ejecutar la función. Puede ser 1 o miles, pero por la sanidad mental del que lea la función, recomiendo que la función no tenga más de 10 líneas... si hay que hacer más funciones, no hay problema.

### La tercer función
Venimos bien, pero qué pasa si queremos usar esa función para devolver un valor?

Hasta ahora estuvimos imprimiendo por pantalla mensajes. Pero algo más útil probablemente sería obtener esos resultados para poderlos combinarlos con otros.

Me refiero a lo siguiente:

```javascript
  function sumar(n1, n2) {
    return n1 + n2;
  }

  const resultado = sumar(4, 5);

  console.log(resultado); //> imprime 9 por consola.
```

Acabo de introducir una nueva palabra reservada `return`.

Esta palabra se usa para indicar el retorno de una función. Todo lo que esté debajo de ese retorno no se va a ejecutar. Una vez que se retorna, se sale de la función.

Esta característica nos trae grandes beneficios al poder usar funciones en conjunto con otras para obtener distintos resultados.

Lo que podríamos pensar es que cuando se ejecuta `sumar(4, 5)`, se reemplaza por el valor que genera. Entonces queda `const resultado = 9`.

Y qué pasa si hago algo como...

```javascript
const resultado = sumar(sumar(2, 2), 4);

console.log(resultado); //> ?
```

Qué piensan que va a imprimir por pantalla eso?

La respuesta sale de pensar el orden en que se ejecuta todo:

```javascript
// 1.
sumar(sumar(2, 2), 4);

// 2.
sumar(4, 4);

// 3.
8
```

Entonces se evalúa primero lo que está como parámetro y recién cuando los parámetros son 2 valores se ejecuta la función...

Medio confuso no?

Lo importante es que las funciones van a ser reemplazadas por el retorno que generen.

### Entonces qué hacen las funciones
Las funciones pueden hacer 2 cosas:
1. Retornar un valor.
2. Hacer algo, como un `console.log`. El cual no es un retorno, es "hacer algo". Imprimir por consola.

### Un resumen

#### sintaxis
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

#### ejecución
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
