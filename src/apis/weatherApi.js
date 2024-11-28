// import axios from 'axios';
export const WEATHER_API_OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_CITY_API_KEY,
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = 'https://open-weather13.p.rapidapi.com'


// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }