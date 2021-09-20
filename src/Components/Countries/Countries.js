import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "bootstrap/dist/css/bootstrap.min.css"
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="mt-3">
      <h2 className="ps-4">Travelling around the world</h2>
      <h4 className="ps-4">Available Countries: {countries.length}</h4>
      {countries.map((country) => (
        <Country name={country.name} capital={country.capital} population={country.population}></Country>
      ))}
    </div>
  );
};

export default Countries;
