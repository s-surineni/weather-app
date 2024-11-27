import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';
import { useState } from 'react';

function App() {
  const [dump, setDump] = useState("");
  const handleCitySelection = (city) => {
    console.log('ironman city', city);
    setDump(JSON.stringify(city));
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
