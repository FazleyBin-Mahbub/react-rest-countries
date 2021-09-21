import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <div className="heading ps-4">
        <h2>Travelling around the world</h2>
        <h4>Available Countries: {countries.length}</h4>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.alpha2ode}
           country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
