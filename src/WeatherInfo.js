import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.info.city}, {props.info.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize"> {props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-left">
              <img src={props.info.iconUrl} alt={props.info.description} />
            </span>
            <span className="float-left">
              <TemperatureConversion celsius={props.info.temperature} />
            </span>
          </div>
        </div>
        <div className="col-6 mt-2">
          <ul>
            <li> Wind: {Math.round(props.info.wind)} km/h</li>
            <li> Humidity: {props.info.humidity}%</li>
            <li> Pressure: {props.info.pressure} hPA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
