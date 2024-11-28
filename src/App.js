import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';
import { useState } from 'react';
import {WEATHER_API_URL, WEATHER_API_OPTIONS} from './apis/weatherApi';

function App() {
  const [dump, setDump] = useState("");
  const handleCitySelection = async (city) => {
    setDump(JSON.stringify(city));
    const [lat, lon] = city.value.split(" ");
    try {
      const weatherData = await fetch(`${WEATHER_API_URL}/city/latlon/${lat}/${lon}`, WEATHER_API_OPTIONS);
      setDump(JSON.stringify(await weatherData.json()));

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container">
      <div>{dump}</div>
      <Search handleCitySelection={handleCitySelection} />
      <CurrentWeather />
    </div>
  );
}

export default App;
