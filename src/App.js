import "./App.css";
import Search from "./components/search/search";
import React from "react";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSeachChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
