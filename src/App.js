import React, { useEffect, useState } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
      response.json()
    ).then((data)=>{
      const countries=data.map((country)=>({
        label:country.country,
        value:country.countryInfo.iso2,
      }));
      setCountries(countries);
    })
  },[]);
  // console.log(countryInfo);
  console.log(countries);
  return (
    <div className={styles.container}>
      {/* <Cards />
      <Charts /> */}
      <CountryPicker countriesList={countries}/>

    </div>
  );
}

export default App;
