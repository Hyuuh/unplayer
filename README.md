# Un Player **WRAPPER**

> **Nota:** Este módulo no está afiliado de ninguna manera a UnPlayer.

Con este módulo busco facilitar la manera de uso de la API para NodeJS.

Ya no estar utilizando y complicándose la vida. Dicho esto, les doy un índice de lo que contiene este módulo.

¿Deseas ayuda para poder utilizar esta ``Wrapper`` o simplemente no sabes qué hacer?
> Entra al servidor de [soporte](https://discord.gg/HznksNp)

## [`Índice`](#índice)
* [Cambios](#cambios)
    * [Actualizaciones](#actualizaciones)
    * [Futuros Cambios](#futuro-cambios)
* [UnPlayer](#unplayer)
    * [user](#unplayer-user)
* [GTAV](#gta-v)
    * [user](#gtav-user)
    * [org](#gtav-org)
* [SAMP](#samp)
    * [user](#samp-user)
    * [org](#samp-org)
    * [faction](#samp-faction)

# Cambios
## Actualizaciones
- v1.0.1
    - Se modificó el README.md para añadir el servidor de soporte.
    - Arreglo de posibles errores.
    - Arreglo de errores
        - Un error cuando la ID existía pero no tenía datos guardados.
- v1.0.0
    - Inicio de proyecto.

# UnPlayer
## [UnPlayer-user](#unplayer-user)
``<UnPlayer>.user(type, id)``

Obtén los datos de un usuario, dependiendo del tipo de búsqueda que desea.
> Utiliza dos parámetros:

- type
- id

Donde `type` → `user` | `samp` | `gtav` | `forum` | `discord`, en forma de [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)

Donde `id` → [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer({
    api_key: '10233',
    api_private: '01113'
})

client.user("discord", "679078643686834207")
.then(dato => {
console.log(dato)
})
```
**Esto retornaría algo parecido [a](https://github.com/un-player/unplayer-api#m%C3%A9todos-restful-disponibles):**
```json
{
        "user": 12345,
        "forum": 12345,
        "gtav": 12345,
        "discord": "679078643686834207"

}
```
# GTA V
## [GTAV-user](#gtav-user)
``<GTA-V>.user(id)``

Obtén los datos de un usuario conectado al servidor de GTA-V.
> Utiliza un parámetro:

- id

Donde `id` → [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
```js
const { GTAV } = require('unplayer');
const client = new GTAV({
    api_key: '10233',
    api_private: '01113'
})
client.user('36');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer.GTAV({
    api_key: '10233',
    api_private: '01113'
})
client.user('36');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer({
    api_key: '10233',
    api_private: '01113'
})
client.GTAV.user('36');
```
**Esto retornaría algo parecido [a](https://github.com/un-player/unplayer-api#m%C3%A9todos-restful-disponibles-gtav):**
```json
{
    "action": "GET 1.0\/gtav\/user\/1",
    "name": "Nombre_Apellido",
    "level": 6,
    "banned": false,
    "played_time": 67644,
    "certification": 0,
    "orgs": [
        {
            "org_id": 3,
            "rank_id": 6,
            "idx": 0
        }
    ]
}
```

## [GTAV-org](#gtav-org)
``<GTA-V>.org(id)``

Obtén los datos de una organización del servidor de GTA-V.
> Utiliza un parámetro:

- id

Donde `id` → [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
```js
const { GTAV } = require('unplayer');
const client = new GTAV({
    api_key: '10233',
    api_private: '01113'
})
client.org('12');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer.GTAV({
    api_key: '10233',
    api_private: '01113'
})
client.org('12');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer({
    api_key: '10233',
    api_private: '01113'
})
client.GTAV.org('12');
```
**Esto retornaría algo parecido [a](https://github.com/un-player/unplayer-api#m%C3%A9todos-restful-disponibles-gtav):**
```json
{
    "action": "GET 1.0\/gtav\/org\/20",
    "id": 12,
    "name": "Gobierno de San Andreas",
    "members_count": 30,
    "category": {
        "id": 11,
        "name": "Gubernamental",
        "certification": 1
    },
    "members": [
        {
            "name": "Nahuel_Sobredo",
            "user_id": 113,
            "rank_id": 55,
            "idx": 0
        },
        {
            "name": "David_Page",
            "user_id": 3706,
            "rank_id": 56,
            "idx": 1
        }
    ],
    "ranks": [
        {
            "id": 55,
            "name": "Alcalde",
            "idx": "0"
        }
    ]
}
```

# SAMP
## [SAMP-user](#samp-user)
``<SAMP>.user(id)``

Obtén los datos de un usuario conectado al servidor de SAMP.
> Utiliza un parámetro:

- id

Donde `id` → [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
```js
const { SAMP } = require('unplayer');
const client = new SAMP({
    api_key: '1158418',
    api_private: '488484'
})
client.user('21');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer.SAMP({
    api_key: '1158418',
    api_private: '488484'
})
client.user('21');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer({
    api_key: '1158418',
    api_private: '488484'
})
client.SAMP.user('21');
```
**Esto retornaría algo parecido [a](https://github.com/un-player/unplayer-api#m%C3%A9todos-restful-disponibles-samp):**
```json
{
    "action": "GET 1.0\/samp\/user\/1",
    "name": "Nombre_Apellido",
    "level": 10,
    "banned": false,
    "played_time": 12456,
    "certification": 0,
    "faction_id": 0,
    "faction_rank": 0,
    "orgs": [
        {
            "org_id": 1148,
            "rank_id": 884,
            "idx": 1
        }
    ]
}
```

## [SAMP-org](#samp-org)
``<SAMP>.org(id)``

Obtén los datos de una organización del servidor de SAMP.
> Utiliza un parámetro:

- id

Donde `id` → [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
```js
const { SAMP } = require('unplayer');
const client = new SAMP({
    api_key: '1158418',
    api_private: '488484'
})
client.org('1150');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer.GTAV({
     api_key: '1158418',
    api_private: '488484'
})
client.org('1150');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer({
     api_key: '1158418',
    api_private: '488484'
})
client.SAMP.org('1150');
```
**Esto retornaría algo parecido [a](https://github.com/un-player/unplayer-api#m%C3%A9todos-restful-disponibles-samp):**
```json
{
    "action": "GET 1.0\/samp\/org\/1150",
    "id": 1150,
    "name": "Taller River Plate",
    "certification": 0,
    "members_count": 29,
    "members": [
        {
            "name": "Frank_Lindermann",
            "user_id": 24700,
            "rank_id": 906,
            "idx": 3
        },
        {
            "name": "Katrina_Rowling",
            "user_id": 26875,
            "rank_id": 905,
            "idx": 2
        }
    ],
    "ranks": [
        {
            "id": 904,
            "name": "Mister",
            "idx": "1"
        },
        {
            "id": 905,
            "name": "Gerente",
            "idx": "2"
        },
        {
            "id": 906,
            "name": "Supervisor",
            "idx": "3"
        },
        {
            "id": 907,
            "name": "Mec\u00e1nico Senior",
            "idx": "1907"
        },
        {
            "id": 911,
            "name": "M\u00e9canico Junior",
            "idx": "1911"
        }
    ]
}
```

## [SAMP-faction](#samp-faction)
``<SAMP>.faction(id)``

Obtén los datos de una facción del servidor de SAMP.
> Utiliza un parámetro:

- id

Donde `id` → [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
```js
const { SAMP } = require('unplayer');
const client = new SAMP({
    api_key: '1158418',
    api_private: '488484'
})
client.faction('30');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer.GTAV({
     api_key: '1158418',
    api_private: '488484'
})
client.faction('30');
```
> O también
```js
const UnPlayer = require('unplayer');
const client = new UnPlayer({
     api_key: '1158418',
    api_private: '488484'
})
client.SAMP.faction('30');
```
**Esto retornaría algo parecido [a](https://github.com/un-player/unplayer-api#m%C3%A9todos-restful-disponibles-samp):**
```json
{
    "action": "GET 1.0\/samp\/faction\/1",
    "id": 1,
    "name": "Gobierno",
    "members_count": 51,
    "members": [
        {
            "name": "Agustin_B\u00e1ez",
            "user_id": 57273,
            "rank_id": 1,
            "idx": 0
        },
        {
            "name": "Katrina_Rowling",
            "user_id": 26875,
            "rank_id": 2,
            "idx": 1
        }
    ],
    "ranks": [
        {
            "id": 1,
            "name": "Presidente",
            "idx": "0"
        },
        {
            "id": 2,
            "name": "Ministro(a)",
            "idx": "1"
        },
        {
            "id": 3,
            "name": "Agente",
            "idx": "2"
        },
        {
            "id": 4,
            "name": "Bur\u00f3crata",
            "idx": "3"
        },
        {
            "id": 5,
            "name": "Asistente",
            "idx": "4"
        }
    ]
}
```