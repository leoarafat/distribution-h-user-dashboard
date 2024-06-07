import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import Loader from "@/utils/Loader";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3/all");
      const data = await response.json();
      setCountries(data);
      const allCountryCodes = data.map((country) => country.cca3);
      setSelectedCountries(allCountryCodes);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching countries: ", error);
      setLoading(false); // Set loading to false even if there's an error
    }
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
      if (prevSelected.some((code) => continentCountryCodes.includes(code))) {
        return prevSelected.filter(
          (code) => !continentCountryCodes.includes(code)
        );
      } else {
        return [...prevSelected, ...continentCountryCodes];
      }
    });
  };

  const renderContinent = (continentName) => (
    <Grid item xs={12} sm={4} key={continentName}>
      <Typography variant="h5" gutterBottom>
        {continentName}
      </Typography>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => handleAllContinentSelect(continentName)}
                checked={countries
                  .filter((country) => country.region === continentName)
                  .every((country) => selectedCountries.includes(country.cca3))}
              />
            }
            label="Select All"
          />
          {countries.map((country) => {
            return country.region === continentName ? (
              <FormControlLabel
                key={country.cca3}
                control={
                  <Checkbox
                    checked={selectedCountries.includes(country.cca3)}
                    onChange={() => handleCountrySelect(country.cca3)}
                  />
                }
                label={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={country.flags[1]}
                      alt={country.name.common}
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    {country.name.common}
                  </div>
                }
              />
            ) : null;
          })}
        </FormGroup>
      </FormControl>
    </Grid>
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Let's Distribute Your Music With Musix
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={3}>
          {renderContinent("Asia")}
          {renderContinent("Africa")}
          {renderContinent("Europe")}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
