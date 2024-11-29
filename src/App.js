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
  const resolveProms1 = async (dayProm, forecastProm) => {
    await dayProm;
    await forecastProm;
    dayProm.then(async (response) => {
      setWeatherData(await response.json());
    })
    forecastProm.then(async (response2) => {
      setForecast(await response2.json());
    })
  }

  const resolveProms2 = async (dayProm, forecastProm) => {
    await Promise.all([dayProm, forecastProm]).then(async (responses) => {
      setWeatherData(await responses[0].json());
      setForecast(await responses[1].json());
    })
  }


  const handleCitySelection = async (city) => {
    setDump(JSON.stringify(city));
    const [lat, lon] = city.value.split(" ");
    try {
      const dayProm = fetch(`${WEATHER_API_URL}/city/latlon/${lat}/${lon}&units=metric`, WEATHER_API_OPTIONS);
      // setWeatherData(response);
      const forecastProm = fetch(`${WEATHER_API_URL}/city/fivedaysforcast/${lat}/${lon}?units=metric`, WEATHER_API_OPTIONS);


      console.time('resolveProms2');
      resolveProms2(dayProm, forecastProm);
      console.timeEnd('resolveProms2');

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
