import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';
import { useState } from 'react';
import {WEATHER_API_URL, WEATHER_API_OPTIONS} from './apis/weatherApi';

function App() {
  let temp;
  const [weatherData, setWeatherData] = useState(null);
  const [dump, setDump] = useState("");
  const handleCitySelection = async (city) => {
    setDump(JSON.stringify(city));
    const [lat, lon] = city.value.split(" ");
    try {
      const response = await (await fetch(`${WEATHER_API_URL}/city/latlon/${lat}/${lon}&units=metric`, WEATHER_API_OPTIONS)).json();
      setDump(JSON.stringify( weatherData));
      setWeatherData(response);
      console.log('ironman temp', JSON.stringify(temp));
      // setDump(JSON.stringify(await weatherData.json()));

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container">
      <div>{dump}</div>
      <Search handleCitySelection={handleCitySelection} />
      {weatherData && <CurrentWeather weatherData={weatherData}/>}
    </div>
  );
}

export default App;
