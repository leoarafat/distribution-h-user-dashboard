import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import {
  AccountCircle,
  Phone,
  AccountBalance,
  LocationOn,
} from "@mui/icons-material";

const ManageAccount = () => {
  const [tabValue, setTabValue] = useState(0);
  const [accountData, setAccountData] = useState({
    accountName: "John Doe",
    branch: "Main Branch",
    accountNumber: "1234567890",
    phoneNumber: "123-456-7890",
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddAccount = (e) => {
    e.preventDefault();
    // Logic for adding account
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Add Account" />
          <Tab label="My Account" />
        </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {tabValue === 0 && (
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Add Account
              </Typography>
              <form onSubmit={handleAddAccount}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="accountName"
                      label="Account Name"
                      variant="outlined"
                      margin="normal"
                      value={accountData.accountName}
                      onChange={(e) =>
                        setAccountData({
                          ...accountData,
                          accountName: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="branch"
                      label="Branch"
                      variant="outlined"
                      margin="normal"
                      value={accountData.branch}
                      onChange={(e) =>
                        setAccountData({
                          ...accountData,
                          branch: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="accountNumber"
                      label="Account Number"
                      variant="outlined"
                      margin="normal"
                      value={accountData.accountNumber}
                      onChange={(e) =>
                        setAccountData({
                          ...accountData,
                          accountNumber: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="phoneNumber"
                      label="Phone Number"
                      variant="outlined"
                      margin="normal"
                      value={accountData.phoneNumber}
                      onChange={(e) =>
                        setAccountData({
                          ...accountData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Add Account
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        )}
        {tabValue === 1 && (
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Account Information
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center">
                  <AccountCircle />
                  <Typography variant="body1">
                    {accountData.accountName}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <LocationOn />
                  <Typography variant="body1">{accountData.branch}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <AccountBalance />
                  <Typography variant="body1">
                    {accountData.accountNumber}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Phone />
                  <Typography variant="body1">
                    {accountData.phoneNumber}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ManageAccount;
