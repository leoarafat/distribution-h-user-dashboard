import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Email, AccountCircle } from "@mui/icons-material";

const PayoneerCard = () => {
  // Static data
  const payoneerData = {
    fullName: "John Doe",
    email: "example@example.com",
    accountNumber: "1234567890",
    phoneNumber: "123-456-7890",
  };

  const { fullName, email } = payoneerData;

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Payoneer Account Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <AccountCircle fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Full Name: {fullName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Email fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Email: {email}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PayoneerCard;
