import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, GEO_API_OPTIONS } from "../../apis/cityApis";
export default function Search ({handleCitySelection}) {
    const [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (changedSearchText) => {
        setSearchText(changedSearchText);
        handleCitySelection(changedSearchText);
    };
    const  loadOptions = async (searchText) => {
        console.log('ironman searchText', searchText);
        console.log('ironman GEO_API_OPTIONS', JSON.stringify(GEO_API_OPTIONS));
        const response = await fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${searchText}`, GEO_API_OPTIONS);
        const {data} = await response.json();
        const ret =  data.map((city) => ({ value: `${city.latitude} ${city.longitude}`, label: `${city.name}, ${city.countryCode}` }));
        return {options: ret};
        // const ret = response.map((city) => ({ value: `${city.latitude} ${city.longitude}`, label: `${city.name}, ${city.countryCode}` }));
        // const ret = {options: [{value: "1", label: "1"}, {value: "2", label: "2"}, {value: "3", label: "3"}]};
        // return ret;
    }
    return (
        <>
        <AsyncPaginate 
        placeholder="Search for city"
        value={searchText}
        debounceTimeout={600}
        loadOptions={loadOptions}
        onChange={handleSearchTextChange}/>
        </>
    )
}