const axios = require('axios');
const getLugarLatLng = async(dir) =>{
	const econdedUrl = encodeURI(dir);
	//console.log(econdedUrl);


	const instance = axios.create({
	  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${econdedUrl}.json?access_token=pk.eyJ1IjoibXFhc29sZ2VlayIsImEiOiJja2phaTl5bXkxemdpMnFueXNjbjN0cnpsIn0.0T8rqKHRcSQg-J-wV1Zx6A`,
	  headers: {'access_token': 'pk.eyJ1IjoibXFhc29sZ2VlayIsImEiOiJja2phaTl5bXkxemdpMnFueXNjbjN0cnpsIn0.0T8rqKHRcSQg-J-wV1Zx6A'}
	});

	/*instance.get().
			then(resp => {
				console.log(resp.data.features[0]);
			})
			.catch(err => {
				console.log('Error',err);
			});*/

	const resp = await instance.get();
	const data = resp.data.features[0];
	const direccion = data.place_name; 
	const lat = data.geometry.coordinates[1]; 
	const lng = data.geometry.coordinates[0]; 

	if (resp.data.features===0) {
		 throw new Error('No hay resultados');
	}
	return {
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}