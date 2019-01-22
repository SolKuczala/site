---
templateKey: material
title: '[JS #1] Resumen Variables'
date: 2018-09-01T15:04:10.000Z
description: Resumen básico de variables.
type: js
---
### Intro
Las variables son lugares donde puedo guardar valores, a esos lugares les damos un nombre para referenciarlos después.

Por ejemplo si tengo:

```javascript
// creo la "cajita" con nombre "numero" y valor 2.
const numero = 2;

// luego puedo referenciarla por su nombre y obtener el valor que guardé.
console.log(numero); //> imprime por pantalla 2
```

### Utilidad
Cuál es la utilidad de lo que acabamos de ver? El caso era algo trivial. Así que no mucha.

Generalmente una variable se usa para guardar valores intermedios de una operación, haciéndola a esta más fácil de leer.

También se usa mucho para guardar valores que se obtienen como resultado de operaciones "con costo", por ejemplo que un usuario ingrese un número por nuestro programa. Guardaríamos ese resultado y después podríamos hacer algo con eso, pero primero lo guardamos en una variable. Por ejemplo:

```javascript
// le digo al usuario que ingrese un valor.
const nombre = prompt("Ingrese su nombre por favor...");
// una vez que el usuario me ingresa un valor muestro el sig mensaje.
console.log("su nombre es: " + nombre);
```

Cómo harían lo de arriba sin variables?

Quizás algo así:

```javascript
console.log("su nombre es: " + prompt("Ingrese su nombre por favor..."));
```

Y si preguntan si funciona... sí, funciona, pero pueden ver que no se lee bien, y no en todos los casos vamos a poder escribir de esta forma.

### Tipos de variables.
Tenemos 2 tipos, uno que permite reasignación y otro que no.

**Cuál es la utilidad del que no permite?** Nos permite seguir más fácil el comportamiento de nuestro código,
ya que al saber que siempre se mantiene ese valor, más adelante cuando volvamos a ver el nombre de la variable,
vamos a saber el valor que tiene y que no fue modificado.

#### const
Esta es la variable constante (valga la contradicción). Y se escribe de la siguiente forma
```javascript
const nombre = 'Norman';

// si luego quiero reasignarla.
nombre = 'Namron'; //> sale un error diciendo que no puedo reasignarla.

// tampoco puedo inicialiar una constante sin valor, ya que, cuál sería el sentido?
const tengoHambre; //> también me da error.
```

#### let
Esta es la que permite reasignación. Vamos a usarla igual que la anterior pero pudiendo reasignar.
```javascript
let nombre = 'Norman';
// si luego quiero reasignarla.
nombre = 'Namron'; //> todo bien.

// si la inicializo sin valor también está todo bien.
let tengoHambre; //> no pasa nada.

// pero no puedo declararla 2 veces!
let tengoHambre = true;
// si hago lo de arriba me va a dar un error con que la variable ya fue declarada.
```

### Las partes
En resumen, vamos a decir que la sintaxis para declarar una variable va a estar compuesta de 4 partes:

1. palabra reservada: `let` o `const`.
2. lado izquierdo: nombre a darle a la variable, la cual luego voy a poder usar para referenciarla.
3. medio: el igual o el operador de asignación `=`.
4. lado derecho: el valor que le damos a la variable.

### Errores comunes
1. Poner del lado izquierdo un valor.
```javascript
// const 1 = 1; //> solo se pone un nombre identificarlo.
```

2. Esto es un valor, por lo tanto va a darnos un error.
```javascript
// const "uno" = 1; //> el nombre se pone sin comillas.
```

3. Poner espacios en el nombre.
```javascript
// const una variable = 1; //> el nombre del identificador va sin espacios y caracteres especiales.
const unaVariable = 1; //> se suele poner notación "camel case" cuando se tiene más de 1 palabra.
```

4. Usar un nombre reservado como nombre del identificador.
```javascript
// const const = 1; //> si pudiésemos, luego no habría forma de saber a qué nos referimos cuando ponemos `const`.
```

### Tener en cuenta
Si investigan, probablemente se encuentren con que cuentan con la palabra reservada `var` para declarar una variable también. Pueden declarar variables de esa manera si quieren, aunque se está dejando de usar en el desarrollo actual.

Tiene algunas diferencias con `let` y `const`. Pero si están interesados les dejo investigarlo a ustedes esa parte.

### Cerrando
Se acuerdan del código de `let`?

Los dejo con una pregunta: **cuál piensan que va a ser el valor de `tengoHambre` si no le asigno un valor?**

La respuesta la pueden ver en la siguiente guía.

Para leer más sobre variables pueden ver la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types).
