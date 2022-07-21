import "./current-weather.css";
import React from "react";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Brasilia</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">25°C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="Prameter-label top">Details</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Feels Like</span>
                <span className="Prameter-value">22</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Wind</span>
                <span className="Prameter-value">2 m/s</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Humidity</span>
                <span className="Prameter-value">15%</span>
            </div>
            <div className="parameter-row">
                <span className="Prameter-label">Pressure</span>
                <span className="Prameter-value">15 hPa</span>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
