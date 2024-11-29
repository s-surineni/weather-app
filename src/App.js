import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';
import { useState } from 'react';
import {WEATHER_API_URL, WEATHER_API_OPTIONS} from './apis/weatherApi';
import Forecast from './components/Forecast/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [dump, setDump] = useState("");
  const handleCitySelection = async (city) => {
    setDump(JSON.stringify(city));
    const [lat, lon] = city.value.split(" ");
    try {
      const response = await (await fetch(`${WEATHER_API_URL}/city/latlon/${lat}/${lon}&units=metric`, WEATHER_API_OPTIONS)).json();
      setDump(JSON.stringify( weatherData));
      setWeatherData(response);
      const response2 = await (await fetch(`${WEATHER_API_URL}/city/fivedaysforcast/${lat}/${lon}?units=metric`, WEATHER_API_OPTIONS)).json();
      setForecast(response2);
      setDump(JSON.stringify(response2));
      console.log('ironman response2', JSON.stringify(response2));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container">
      <div>{dump}</div>
      <Search handleCitySelection={handleCitySelection} />
      {weatherData && <CurrentWeather weatherData={weatherData}/>}
      {forecast && <Forecast forecast={forecast}/>}
    </div>
  );
}

export default App;
