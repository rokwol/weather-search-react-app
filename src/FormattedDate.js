import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let number = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let second = props.date.getSeconds();

  if (second < 10) {
    return (second = `0${second}`);
  }

  if (minute < 10) {
    return (minute = `0${minute}`);
  }

  if (hour < 10) {
    return (hour = `0${hour}`);
  }
  return (
    <div>
      {day}, {month} {number} {year}
      <br />
      Last updated: {hour}:{minute}:{second}
    </div>
  );
}
