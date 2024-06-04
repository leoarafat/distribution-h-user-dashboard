import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { mobileBankingProviders } from "@/MockData/BankData";

const MobileBanking = () => {
  const [mobileBankingData, setMobileBankingData] = useState({
    name: "John Doe",
    phoneNumber: "123-456-7890",
    mobileBankingName: "bKash",
  });

  const handleAddMobileBanking = (e: any) => {
    e.preventDefault();
    // Add your logic here to handle form submission
  };

  const handleChange = (e) => {
    setMobileBankingData({
      ...mobileBankingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add Mobile Banking Account
          </Typography>
          <form onSubmit={handleAddMobileBanking}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  value={mobileBankingData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  margin="normal"
                  value={mobileBankingData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="bankNameLabel">Method</InputLabel>
                <Select
                  fullWidth
                  id="mobileBankingName"
                  name="mobileBankingName"
                  label="Mobile Banking Name"
                  variant="outlined"
                  value={mobileBankingData.mobileBankingName}
                  onChange={handleChange}
                >
                  {mobileBankingProviders?.map((provider, index) => (
                    <MenuItem key={index} value={provider}>
                      {provider}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* Add more fields here if needed */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Mobile Banking Account
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MobileBanking;
