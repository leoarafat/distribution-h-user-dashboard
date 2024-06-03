import { Container, Grid, TextField, Button, Box } from "@mui/material";

const ArtistChannelRequest = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ my: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="channel-link"
                label="Channel Link"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="topic-link"
                label="Topic Link"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="upc1"
                label="UPC1"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="upc2"
                label="UPC2"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="upc3"
                label="UPC3"
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

export default ArtistChannelRequest;
