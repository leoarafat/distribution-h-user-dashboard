import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { AccountBalance, Phone, AccountCircle } from "@mui/icons-material";

const BankAccountCard = () => {
  // Static data
  const accountData = {
    bankName: "BRAC Bank",
    accountName: "John Doe",
    phoneNumber: "123-456-7890",
    accountNumber: "1234567890",
  };

  const { bankName, accountName, phoneNumber, accountNumber } = accountData;

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Bank Account Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <AccountBalance fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Bank: {bankName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <AccountCircle fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Account Name: {accountName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Phone fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Phone Number: {phoneNumber}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Account Number: {accountNumber}
              </Typography>
            </Box>
          </Grid>
          {/* Add more fields/icons if needed */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BankAccountCard;
