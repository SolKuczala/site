---
templateKey: material
title: '[JS #3] Resumen Operadores'
date: 2018-09-03T15:00:00.000Z
description: Muestra de algunos operadores básicos.
type: js
---
Si declaramos una variable ya usamos un operador, el de asignación `=`.

Los operadores actúan sobre un valor o varios. Retornando otro valor o modificando al valor sobre el que se le aplica la operación.

A continuación les dejo los operadores que considero básicos:

### Numéricos
```javascript
// suma
1 + 1 //> 2

// resta
1 - 1 //> 0

// multiplicación
1 * 1 //> 1

// división
3 / 2 //> 1.5

// módulo
3 % 2 //> 1 (resto de división entera)
```

### Lógicos
```javascript
// "y" lógico
true && false //> false (las 2 cosas deben pasar para que sea true)

// "o" lógico
true || false //> true (alguna de las 2 cosas deben pasar para que sea true)

// negación
!true //> false

// igualdad irrestricta
1 == '1' //> true (transforma 1 valor al tipo del otro para compararlos, entonces solo termina comparando por valor y no por tipo)

// igualdad restricta
1 === '1' //> false (comparación por valor y tipo, en este caso sin de diferentes tipos los valores, como regla general siempre usar este operador)

// diferente
1 !== 0 //> true

// mayor
1 > 1 //> false

// mayor o igual
1 >= 1 //> true (porque son iguales)
```

### Texto
```javascript
// concatenación
const nombre = "norman";
"hola cómo estás " + nombre; //> "hola cómo estás norman"

// template literals
`hola cómo estás ${nombre}` //> "hola cómo estás norman"

/**
 * Otra forma de concatenar strings es mediante algo llamado "template literals" o traducido: "Plantillas de cadena de texto"
 * En donde podemos tener variables y expresiones en medio de este template literal encerrando la expresión en ${expresión}
 *
 * Por ejemplo una expresión equivalente a la anterior sería la siguiente:
 * `hola cómo estás ${nombre}` //> "hola cómo estás norman"
 *
 * Esto me permite salvarme de tener que concatenar con +, lo que puede ser molesto según el tipo de expresión que tenga.
 * Dijimos que es una expresión, por lo que podría hacer algo así también:
 * `sabías que sumar 2 + 2 da ${2 + 2}?`
 */

// acceder a carácter específico mediante un índice
"norman"[1] //> "o"
```

### Otros
```javascript
// me devuelve el tipo de una variable, como string
typeof "soy un string" //> "string"
typeof {} //> "object"
```

Si quieren ver más acerca de operadores, pueden hacerlo viendo la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators).
