import './App.css';
import React from 'react';
import Search from './components/search/search';

function App() {
    const handleOnSearchChanged = (searchData) => {
        console.log(searchData);
    }
    return ( <
        div className = "container" >

        <
        Search onSearchChanged = { handleOnSearchChanged }
        />

        <
        /div>
    );
}

export default App;