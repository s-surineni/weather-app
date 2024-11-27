import './App.css';
import Search from './components/Search/Search';
import { useState } from 'react';

function App() {
  const [dump, setDump] = useState("");
  const handleCitySelection = (city) => {
    console.log('ironman city', city);
    setDump(JSON.stringify(city));
  }
  return (
    <>
      <div className="container">
        <Search handleCitySelection={handleCitySelection} />
        <div>{dump}</div>
      </div>
    </>
  );
}

export default App;
