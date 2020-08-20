/*

NO COPIAR NADA DE ACÁ
LEAN EL README.MD

*/
const UnPlayer = require('./src/index');
const client = new UnPlayer({
    api_key: '10233',
    api_private: '01113'
});

//Obtenemos datos de un usuario.
client.user("user", "1").then(user => console.log(user));
//Verificamos la consola.


//Otra manera de utilizar sería:
const {GTAV} = require('./src/index');
new GTAV({
    api_key: '10233',
    api_private: '01113'
}).org("65")
//Así obtenemos solo el GTAV