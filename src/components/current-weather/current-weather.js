import "./current-weather.css";
import React from "react";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="Prameter-label top">Details</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Feels Like</span>
                <span className="Prameter-value">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Wind</span>
                <span className="Prameter-value">{data.wind.speed}m/s</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Humidity</span>
                <span className="Prameter-value">{data.main.humidity}</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Pressure</span>
                <span className="Prameter-value">{data.main.pressure}</span>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
