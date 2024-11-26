export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const GEO_API_OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_CITY_API_KEY,
		// 'x-rapidapi-key': "sample",

		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }