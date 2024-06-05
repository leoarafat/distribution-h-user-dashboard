import { useProfileQuery } from "@/redux/slices/admin/userApi";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const YoutubeTakeDown = () => {
  const { data: profileData, isLoading, isError } = useProfileQuery({});

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            my: 4,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            my: 4,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="error">
            Failed to load profile data.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom style={{ color: "#000" }}>
          Hello, {profileData?.data?.name}!
        </Typography>
        <Typography variant="subtitle1" gutterBottom style={{ color: "#000" }}>
          Enter the Information to make a{" "}
          <span className="text-[#FF0000] font-bold">YouTube Take Down</span>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="label"
              label="Label Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="song"
              label="Song Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="upc"
              label="UPC"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="url"
              label="Youtube Video URL"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default YoutubeTakeDown;
