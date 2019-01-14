---
templateKey: material
title: '[JS #1] Variables'
date: 2018-09-01T15:04:10.000Z
description: Introducción a las variables.
type: js
---
Las variables son lugares donde puedo guardar valores.

Por ejemplo si tengo
```javascript
const numero = 2;

// sigue código...
// luego puedo referenciarla y obtener el valor que guardé.

console.log(numero); //> imprime por pantalla 2
```

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
```

### Las partes
En resumen, vamos a decir que la sintaxis para declarar una variable va a estar compuesta de 4 partes:
1. palabra reservada: `let` o `const`.
2. lado izquierdo: nombre a darle a la variable, la cual luego voy a poder usar para referenciarla.
3. el igual: el igual es el operador de asignación. Vamos a ver más de operadores luego.
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
Existe la palabra reservada

### Cerrando
Se acuerdan del código de `let`?

Los dejo con una pregunta: **cuál piensan que va a ser el valor de `tengoHambre` si no le asigno un valor?**

La respuesta la pueden ver en la siguiente guía.

Para leer más sobre variables pueden ver la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types).
