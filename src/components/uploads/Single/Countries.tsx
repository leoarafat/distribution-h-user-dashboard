import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Loader from "@/utils/Loader";

interface Country {
  cca3: string;
  region: string;
  name: {
    common: string;
  };
  flags: string[];
}

interface Props {
  onChange: (key: string, value: any) => void;
}

const Countries: React.FC<Props> = ({ onChange }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3/all");
      const data = await response.json();
      const countriesData: Country[] = data;
      setCountries(countriesData);
      const allCountryCodes = countriesData.map((country) => country.cca3);
      setSelectedCountries(allCountryCodes);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries: ", error);
      setLoading(false);
    }
  };

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountries((prevSelected) => {
      const countryIndex = prevSelected.indexOf(countryCode);
      if (countryIndex === -1) {
        return [...prevSelected, countryCode];
      } else {
        const updatedCountries = [...prevSelected];
        updatedCountries.splice(countryIndex, 1);
        return updatedCountries;
      }
    });
  };

  const handleAllContinentSelect = (continent: string) => {
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

  useEffect(() => {
    onChange("countries", selectedCountries);
  }, [selectedCountries]);

  const renderContinent = (continentName: string) => (
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
