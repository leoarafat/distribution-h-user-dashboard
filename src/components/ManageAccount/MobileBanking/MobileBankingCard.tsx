import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { PhoneAndroid, AccountCircle } from "@mui/icons-material";

const MobileBankingCard = () => {
  // Static data
  const mobileBankingData = {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    mobileBankingName: "bKash",
  };

  const { name, phoneNumber, mobileBankingName } = mobileBankingData;

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Mobile Banking Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <AccountCircle fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Name: {name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <PhoneAndroid fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Phone Number: {phoneNumber}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <AccountCircle fontSize="large" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Mobile Banking Provider Name: {mobileBankingName}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MobileBankingCard;
