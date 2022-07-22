import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const Forecast = ({ data }) => {
  const dainInWeek = new Date().getDay();
  const forecastday = WEEK_DAYS.slice(dainInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dainInWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="wather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastday[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C 
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                    <label className="parameter-label">Pressão</label>
                    <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-grid-item">
                    <label className="parameter-label">Humidade</label>
                    <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                    <label className="parameter-label">Nuvens</label>
                    <label>{item.clouds.all}</label>
                </div>
                <div className="daily-details-grid-item">
                    <label className="parameter-label">Vento</label>
                    <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                    <label className="parameter-label">Nivel Do Mar</label>
                    <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                    <label className="parameter-label">Sensação</label>
                    <label>{Math.round(item.main.feels_like)}°C </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
