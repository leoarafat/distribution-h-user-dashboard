import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries: ", error);
    }
  };

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
  };

  const handleCountrySelect = (countryCode) => {
    const countryIndex = selectedCountries.indexOf(countryCode);
    if (countryIndex === -1) {
      setSelectedCountries([...selectedCountries, countryCode]);
    } else {
      const updatedCountries = [...selectedCountries];
      updatedCountries.splice(countryIndex, 1);
      setSelectedCountries(updatedCountries);
    }
  };

  const handleAllContinentSelect = (continent) => {
    const continentCountries = countries.filter(
      (country) => country.region === continent
    );
    const continentCountryCodes = continentCountries.map(
      (country) => country.cca3
    );
    setSelectedCountries((prevSelected) => {
      if (prevSelected.includes(continent)) {
        return prevSelected.filter(
          (code) => !continentCountryCodes.includes(code)
        );
      } else {
        return [...prevSelected, ...continentCountryCodes];
      }
    });
  };

  const renderContinent = (continentName) => (
    <Grid item xs={12} sm={4}>
      <Typography variant="h5" gutterBottom>
        {continentName}
      </Typography>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => handleAllContinentSelect(continentName)}
              />
            }
            label="Select All"
          />
          {countries.map(
            (country) =>
              country.region === continentName && (
                <FormControlLabel
                  key={country.cca3}
                  control={
                    <Checkbox
                      checked={selectedCountries.includes(country.cca3)}
                      onChange={() => handleCountrySelect(country.cca3)}
                    />
                  }
                  label={country.name.common}
                />
              )
          )}
        </FormGroup>
      </FormControl>
    </Grid>
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Countries
      </Typography>
      <Grid container spacing={3}>
        {renderContinent("Asia")}
        {renderContinent("Africa")}
        {renderContinent("Europe")}
      </Grid>
    </Container>
  );
};

export default Countries;
