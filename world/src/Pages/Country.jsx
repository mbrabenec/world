import { React, useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";

function Country(props) {
  const [info, setInfo] = useState(null);
  const [country, setCountry] = useState(props.match.params.countryName);

  async function fetchOne() {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const data = await response.json();
    setInfo(data[0]);
  }

  useEffect(() => {
    fetchOne();
  }, []);

  return (
    <div>
      {console.log(info)}
      {info && info.name}
      <br/>
      {info && info.region}

        <p>a</p>

    </div>
  );
}

export default Country;
