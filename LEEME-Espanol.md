# Información
Este paquete sirve para hacer una base de datos de una manera muy simple.  
Puede verse como un [`Map`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map) que no pierde sus datos aun que se reinicie el proceso y que además tiene un par de métodos extra


## Registro de cambios

* **`v0.0.1`** - Se publicó el package 

## Créditos:

El sistema del método `db.array()` y los métodos que salieron de este. Fueron "destilados" del método `array` de la `Discord.Collection` de [discord.js](https://www.npmjs.com/package/discord.js)

Durante la documentación yo digo SQLite3, pero en realidad hablo de [better-sqlite3](https://www.npmjs.com/package/better-sqlite3), que es una versión síncrona y más eficiente de SQLite3


___

## Métodos

```js
const Database = require('@fabricio-191/simple.db');
const db = new Database();
```
### class [Database](#database) 

* [set](#set-get-has-y-delete)
* [get](#set-get-has-y-delete)
* [has](#set-get-has-y-delete)
* [delete](#set-get-has-y-delete)
* [clear](#clear)
* [array](#array)
  * [random](#random)
  * [find](#find)
  * [some](#some)
  * [map](#map)
  * [every](#every)
  * [filter](#filter)
  * [reduce](#reduce)


## Database  
```js
new Database({ 
    path: 'ruta', id: 'identificacion' 
});
```

Para explicar un poco, cada `Database` creada, es una tabla en una base de datos de SQLite3, la `path` es la ruta hacia esa base de datos de SQlite3, por defecto es `'./simpleDatabase.db'`.

La `id` es un identificador para las distintas `Database`, por defecto es `'simple_db'`

```js
const Database = require('@fabricio-191/simple.db');

let db1 = new Database();
let db2 = new Database(); //mismo valor que 'db1'

let db3 = new Database({ id: 'economia' }); //distinto

let db3 = new Database({ path: './my_database.db' }); 
//base de datos de SQLite3 distinta, por lo tanto, no tiene el mismo valor que 'db1' ni 'db2'
```

Las `id`'s tienen que ser como el nombre de una variable en JavaScript, no pueden empezar por números o contener símbolos raros (si pueden contener y empezar por un guion bajo).

#### Par
La base de datos funciona con pares `clave/valor` (como un [`Map`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map)). así que, cuando diga `par` me refiero al par `clave/valor`, se ven así estos [par]()es `clave => valor`.

#### Entrada

Para trabajar de manera mas simple con la base de datos, hice algo que llamo `entry` o `entrada`, se ven así:  
`{ key: clave, value: valor }`.

#### Claves y valores

las **clave**s, pueden ser [strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String) o [numeros](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number), y los **valor**es pueden ser cualquier cosa, si un valor no es introducido (o tiene valor `undefined`), se guardará con valor `null`

## `set`, `get`, `has` y `delete`:


`db.set(clave, valor)` este método sirve para establecer un [par](#par)

`db.get(clave)` se usa para obtener el valor de un [par](#par) con esa clave

`db.has(clave)` sirve para comprobar si en la base de datos hay un [`par`](#par) con esa clave, devuelve `true` existe o `false` si no lo hace

`db.delete(clave)` se usa para borrar un [par](#par) con esa clave, si no hay nada en la db con esta clave, devuelve `false`, si no, devuelve el par borrado con forma de [entrada](#entrada)


Ejemplo:

```js
const db = new Database({ id: 'economia' });
const userID = '393382613047574530';

if(!db.has(userID)){
    //si no existe este usuario en la base de datos, lo establece
    db.set(userID, { money: 100, level: 0 });
}

const data = db.get(userID);
console.log(data); //{ money: 100, level: 0 }

db.set(userID, { 
    money: data.money + 75, 
    level: data.level + 1 
});

console.log(db.get(userID)); //{ money: 175, level: 1 }


console.log(db);
//simpleDatabase [Map] {
//  '393382613047574530' => { money: 175, level: 1 }
//}

const deleted = db.delete(userID)

console.log(db.get(userID)); //undefined
console.log(db); //simpleDatabase [Map] {}

console.log(deleted) 
//{ 
//    key: '393382613047574530', 
//    value: { money: 175, level: 1 } 
//}
```

## `clear`:

`db.clear(all)` sirve para limpiar la base de datos, si no se le pone un valor a `all`; `db.clear()` se borraran todos los [par](#par)es cuyos valores sean `null` o `undefined`, si se establece `all` como `true` borrara **todos** los [par](#par)es en la base de datos.

y además, el método devuelve un [`Array`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array) con los valores borrados, en forma de [`entradas`](#entrada): 
```js
[
    { key: clave, value: valor }, 
    { key: clave, value: valor }
]
```

Ejemplo:

```js
const db = new Database({ id: 'economia' });

[
    ['393382613047574530', null],
    ['535158565619499024', false],
    ['294373358328348673'] //al no poner ningún valor, se guarda con valor 'null'
].map(([userID, value]) => {
    db.set(userID, value);
});


console.log(db);
//simpleDatabase [Map] {
//    '393382613047574530' => null,
//    '535158565619499024' => false,
//    '294373358328348673' => null
//}

console.log(db.clear());
//[
//  { key: '393382613047574530', value: null },
//  { key: '294373358328348673', value: null }
//]


console.log(db);
//simpleDatabase [Map] {
//  '535158565619499024' => false
//}

db.clear(true);
console.log(db);
//simpleDatabase [Map] {}
``` 

## `array`:

`db.array()` devuelve un array de todos los [par](#par)es en la base de datos pero en forma de [`entradas`](#entrada)

Por ej: 
```js
console.log(db.array())
//[
//  { key: '237731916290195456', value: {}},
//  { key: '253727823972401153', value: {}},
//  { key: '398321973404368927', value: {}},
//  { key: '289553210459553792', value: {}}
//]
```

____

Los siguientes métodos salen completamente de `db.array()`, así que estaremos siempre trabajando con [entradas](#entrada)

Nota: los métodos que normalmente tienen `thisArg`, lo tienen y se puede usar, simplemente no lo puse porque es muy raro que alguien lo use
___

## `random`:

`db.random()` devuelve una [entrada](#entrada) aleatoria de la base de datos

Ej: 
```js
console.log(db)
//simpleDatabase [Map] {
//  '237731916290195456' => {},
//  '253727823972401153' => {},
//  '398321973404368927' => {},
//  '289553210459553792' => {}
//}

console.log(db.random())
//{ key: '253727823972401153', value: {}}
```

## `find`:

`db.find(fn)` es lo mismo que [Array.prototype.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find)

devuelve la primera [entrada](#entrada) que cumple con la función establecida.

```js
console.log(db)
//simpleDatabase [Map] {
//  '393382613047574530' => { items: 3 },
//  '401946440332476426' => { items: 1 },
//  '461071138127347713' => { items: 1 },
//  '440765028665262080' => { items: 5 }
//}

let result = db.find(entry => entry.value.items > 4)
console.log(result) //{ key: '440765028665262080', value: { items: 5 }}
```

## `some`:

`db.some(fn)` es lo mismo que [Array.prototype.some()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some)

devuelve `true` si alguna de todas las [entradas](#entrada) en la db cumple con la función establecida o `false` si ninguna lo hace

```js
console.log(db)
//simpleDatabase [Map] {
//  '393382613047574530' => { items: 3 },
//  '401946440332476426' => { items: 1 },
//  '461071138127347713' => { items: 1 },
//  '440765028665262080' => { items: 5 }
//}

console.log(
    db.some(entry => entry.value.items > 4)
) //true
```

## `map`:

`db.map(fn)` es lo mismo que [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)

devuelve un nuevo array con los resultados de la función establecida, aplicada en cada uno de sus elementos

```js
console.log(db)
//simpleDatabase [Map] {
//  '393382613047574530' => 300,
//  '401946440332476426' => 140,
//  '461071138127347713' => 255,
//  '440765028665262080' => 425
//}

const result = db.map(
    ({value, key}) => { //le aplique destucturing a la 'entry'
        return key;
    }
)

console.log(result)
//[
//  '393382613047574530',
//  '401946440332476426',
//  '461071138127347713',
//  '440765028665262080'
//]
```


## `every`:

`db.every(fn)` es lo mismo que [Array.prototype.every()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every)

devuelve `true` si todas las [entradas](#entrada) en la db cumplen con la función establecida o `false` si alguna no lo hace

nota: si la base de datos esta vaciá, este método devolvera `true` siempre, sin importar la función

```js
console.log(db)
//simpleDatabase [Map] {
//  '393382613047574530' => { items: 3 },
//  '401946440332476426' => { items: 1 },
//  '461071138127347713' => { items: 1 },
//  '440765028665262080' => { items: 5 }
//}

console.log(
    db.every(entry => entry.value.items > 4)
) //false
```

## `filter`:

`db.filter(fn)` es lo mismo que [Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)

crea un nuevo array con los elementos que cumplen con la función

```js
console.log(db)
//simpleDatabase [Map] {
//  '393382613047574530' => { items: 3 },
//  '401946440332476426' => { items: 1 },
//  '461071138127347713' => { items: 1 },
//  '440765028665262080' => { items: 5 }
//}

console.log(
    db.filter(entry => entry.value.items >= 3)
) 
//[ 
//    { 
//        key: '393382613047574530', 
//        value: { items: 3 }
//    }, { 
//        key: '440765028665262080', 
//        value: { items: 5 } 
//    } 
//]
```

## `reduce`:

`db.reduce(fn, valorInicial)` es lo mismo que [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce) 

Ejecuta una función reductora sobre cada elemento de la db para devolver un único valor

```js
console.log(db)
//simpleDatabase [Map] {
//  '393382613047574530' => { items: 3 },
//  '401946440332476426' => { items: 1 },
//  '461071138127347713' => { items: 1 },
//  '440765028665262080' => { items: 5 }
//}

console.log(
    db.reduce((acc, entry) => {
        acc[entry.key] = entry.value
    }, {})
) 
//simpleDatabase [Map] {
//    '393382613047574530': { items: 3 },
//    '401946440332476426': { items: 1 },
//    '461071138127347713': { items: 1 },
//    '440765028665262080': { items: 5 }
//}
```

