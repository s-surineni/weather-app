import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

export default function Search () {
    const [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (changedSearchText) => {
        setSearchText(changedSearchText);
        console.log('ironman changedSearchText', JSON.stringify(changedSearchText));
    };
    const loadOptions = (searchText) => {
        console.log('ironman searchText', searchText);
        return {options: []}
    }
    return (
        <>
        <div>Hello</div>
        <div>{searchText}</div>
        <AsyncPaginate 
        placeholder="Search for city"
        value={searchText}
        debounceTimeout={600}
        loadOptions={loadOptions}
        onChange={handleSearchTextChange}/>
        </>
    )
}