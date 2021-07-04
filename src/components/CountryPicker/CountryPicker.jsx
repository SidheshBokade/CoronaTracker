import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';//native seclect for each seclect by hovering in the contries and form control is the tab odf the country

import { fetchCountries } from '../../api';//api 

import styles from './CountryPicker.module.css';//css of country picker 

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>{/*styles for the form*/}
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>{/*for each seclect*/}
        <option value="">India</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
