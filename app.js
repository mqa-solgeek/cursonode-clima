
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'direccion',
		demand: true
	}
}).argv;
//argv.direccion
/*lugar.getLugarLatLng(argv.direccion)
	.then(console.log);*/
/*clima.getClima(40.7648,-73.9808)
	.then(console.log)
	.catch(console.log);*/

const getInfo = async(direccion) =>{
	try{
		const coords = await lugar.getLugarLatLng(direccion);
		const temperatura = await clima.getClima(coords.lat, coords.lng);
		return `El clima de ${coords.direccion} es de ${temperatura}.`

	}catch{
		return `No se pudo determinar el clima de ${argv.direccion}.`		
	}
	
}
getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);


