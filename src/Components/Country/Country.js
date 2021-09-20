import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Country.css"
const Country = (props) => {
  return (
    <div className=" m-4 p-3 country">
      <h2>Name:{props.name} </h2>
      <h4>Capital: {props.capital}</h4>
        <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;
