import React from "react";

import "./Country.css";
const Country = (props) => {
  const { name, flag, region, capital, population } = props.country;
  return (
    <div className="country">
      <h1>Name: {props.country.name}</h1>
      <img className="country-flag" title={name} src={flag} alt="" />
      <p>Region: {region}</p>

      <h4>Capital: {capital}</h4>
      <h5>Population: {population}</h5>
    </div>
  );
};

export default Country;
