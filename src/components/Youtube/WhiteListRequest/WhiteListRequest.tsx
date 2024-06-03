import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
const WhiteListRequest = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box sx={{ my: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Whitelist Request
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Enter the URL to request whitelisting
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="whitelist-url"
                label="Whitelist URL"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default WhiteListRequest;
