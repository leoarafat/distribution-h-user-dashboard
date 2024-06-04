import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const PayoneerPage = () => {
  const [payoneerData, setPayoneerData] = useState({
    payoneerId: "",
    payoneerEmail: "",
  });

  const handleAddPayoneerAccount = (e: any) => {
    e.preventDefault();
    // Add your logic here to handle form submission
  };

  const handleChange = (e: any) => {
    setPayoneerData({
      ...payoneerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add Payoneer Account
          </Typography>
          <form onSubmit={handleAddPayoneerAccount}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="payoneerId"
                  name="payoneerId"
                  label="Payoneer ID"
                  variant="outlined"
                  margin="normal"
                  value={payoneerData.payoneerId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="payoneerEmail"
                  name="payoneerEmail"
                  label="Payoneer Email"
                  variant="outlined"
                  margin="normal"
                  value={payoneerData.payoneerEmail}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Payoneer Account
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PayoneerPage;
