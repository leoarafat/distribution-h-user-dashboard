import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { bangladeshiBanks } from "@/MockData/BankData";

const Bank = () => {
  const [accountData, setAccountData] = useState({
    accountName: "John Doe",
    bankName: "BRAC Bank",
    branch: "Main Branch",
    accountNumber: "1234567890",
    phoneNumber: "123-456-7890",
  });

  const handleAddAccount = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
  };

  const handleBankNameChange = (e) => {
    setAccountData({
      ...accountData,
      bankName: e.target.value,
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
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
                <InputLabel id="bankNameLabel">Bank Name</InputLabel>
                <Select
                  fullWidth
                  labelId="bankNameLabel"
                  id="bankName"
                  variant="outlined"
                  value={accountData.bankName}
                  onChange={handleBankNameChange}
                >
                  {bangladeshiBanks.map((bank, index) => (
                    <MenuItem key={index} value={bank}>
                      {bank}
                    </MenuItem>
                  ))}
                </Select>
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
    </Box>
  );
};

export default Bank;
