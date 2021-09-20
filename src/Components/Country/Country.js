import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Country.css"
const Country = (props) => {
  return (
    <div className=" m-4 p-3 country">

      <h2>Name:{props.country.name} </h2>
      <img title={props.country.name} className="img-fluid w-25" src={props.country.flag} alt="Country-flag"/>
      <h4>Capital: {props.country.capital}</h4>
        <p>Population: {props.country.population}</p>
    </div>
  );
};

export default Country;
