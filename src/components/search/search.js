import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from 'react';

const Search = ({ onSearchChanged }) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChanged(searchData);
    }

    return ( <
        AsyncPaginate placeholder = "Pesquise por cidade..."
        debounceTimeout = { 600 }
        value = { search }
        onChange = { handleOnChange }
        />
    )
}
export default Search