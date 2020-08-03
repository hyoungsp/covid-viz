import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, FormHelperText } from "@material-ui/core";
import styles from "./CountrySelector.module.css";
import { fetchCountries } from "../../api";

const CountrySelector = ({ handleSelectCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleSelectCountry(e.target.value)}
      >
        <option value=''>Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>Select a country or global</FormHelperText>
    </FormControl>
  );
};

export default CountrySelector;
