---
templateKey: material
title: '[JS #5] Resumen Condicionales'
date: 2018-09-05T15:00:00.000Z
description: Introducción a condicionales.
type: js
---
### Intro
Los condicionales son una parte fundamental de la programación.

Y para introducirles este concepto voy a explicarles un tipo de valor que evité hasta ahora para que lo podamos ver en conjunto con los condicionales:

#### boolean
Los booleanos solo pueden tomar 2 valores, `true` (verdadero) o `false` (falso).

Se suelen usar para "decidir" caminos en nuestro código.

Por ejemplo, si queremos hacer un programa "patoba" que decida en la entrada de un boliche qué personas pueden entrar según la edad y plata que tengan, lo podríamos escribir de la siguiente manera:

**Si** la edad es **mayor a 18** **y** tiene **más de 500 pesos** **entonces** puede pasar **sino** se le pega una patada.

De esa frase notamos que hay 2 variables, la edad y la plata. Después también notamos que toda la frase es una condición, pero esa misma condición a la vez está compuesta por otras 2, unidas por un **y**.

Vamos a separar las "partes" de una y les explico que es cada cosa:

**Si** (la edad es mayor a 18) **y** (tiene más de 500 pesos) **entonces** (puede pasar) **sino** (se le pega una patada).

La primer palabra en negrita es como se suelen empezar todas las frases condicionales. La estructura de una frase condicional suele ser: _"Si pasa esto, entonces hago esto, sino..."_.

El primer grupo encerrado entre paréntesis correspondería al primer criterio que evalúo. El segundo paréntesis es el segúndo criterio que evalúo.

El tercer grupo encerrado entre paréntesis es la acción que haría si los 2 criterios anteriores son positivos y el último grupo sería lo que hago si no se cumplen los 2 criterios.

Mucha charla, veamos cómo se escribe en código:

```javascript
if ((edad > 18) && (plata > 500)) {
    // se ejecuta en caso positivo
    console.log("Puede pasar!");
} else {
    // patada!
    console.log("No pibeh");
}
```

Y dónde entran los booleanos en ese código?

```javascript
const edad = 24;
const plata = 400;

console.log(edad > 18) //>  la expresión "edad >  18" evalúa a "true".
console.log(plata > 500) //>  la expresión "plata > 500" evalúa a "false".
```

Y qué onda con el `&&`?

Es una forma de decir **y**. Cuando decimos esto significa que las 2 expresiones de los costados de ese **y** deben ser verdaderas para que toda esa expresión lo sea.

Ese **y** es un _operador lógico_.

### Operadores lógicos
Además del `&&` tenemos el `||`, que para los que ya vieron algo de programación van a saber que es el **o**, el cual hace verdadera una expresión cuando alguno de sus condiciones de los costados resulta verdadera, solo hace falta que 1 sea verdadera para que todo sea verdadero.

Una vez que le agarran la mano es intuitivo hablar en estos términos y se hace fácil escribir estas expresiones, pero hasta entonces les recomiendo que tengan una tabla de este estilo a mano:

```
|_p_|_q_|_⋀_|_⋁_|
| v | v | v | v |
| f | v | f | v |
| v | f | f | v |
| f | f | f | f |
```

Pero qué demonios es esto?

I know.

Algunos quizás lo vieron en la secundaria con "matemática discreta", pero déjenme advertirles que no es la misma tabla (miren la última fila para los que sepan a qué me refiero).

Déjenme explicarles de qué se trata la tablita...

1. `p` es un predicado cualquiera, o condicional, como "tengo más de 18 años".
2. `q` es otro predicado, como "tengo más de 500 pesos".

Estos predicados toman un valor de verdad, puede que sea cierto o no.

3. `v` y `f` se refieren a "verdadero" y "falso", respectivamente.
4. `⋀` es el símbolo lógico para representar el `&&` de programación.5. `⋁` es el símbolo lógico para representar el `||` de programación.

Pueden hacer el ejercicio de crear predicados al azar y ver cómo quedarían con esta tabla. Por ejemplo:

_**Si hoy llueve y tengo fiaca voy al cine.**_

Entonces... "hoy llueve" es un predicado, el otro sería "tengo fiaca" y el operador lógico sería el `⋀`. Entonces vamos a decir que es verdadero, únicamente cuando las las 2 se cumplan. Y lo que va a pasar si es verdadero es que ejecuto la acción "voy al cine".

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
