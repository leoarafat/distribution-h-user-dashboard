import { useProfileQuery } from "@/redux/slices/admin/userApi";
import { useAddFacebookClaimRequestMutation } from "@/redux/slices/claims/claimsApi";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useRef } from "react";
import toast from "react-hot-toast";

const FacebookClaim = () => {
  const { data: profileData, isLoading, isError } = useProfileQuery({});
  const [addFacebookClaim, { isLoading: isAddLoading }] =
    useAddFacebookClaimRequestMutation();
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const res = await addFacebookClaim({
        user: profileData?.data?._id,
        email: formData.get("email") as string,
        labelName: formData.get("label") as string,
        upc: formData.get("upc") as string,
        url: formData.get("url") as string,
      });
      if (res?.data?.success === true) {
        toast.success("Success");
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    } catch (error: any) {
      console.error("Failed to submit Facebook claim request:", error);
      toast.error(error?.message);
    }
  };

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
          <span className="text-[#1877F2] font-bold">
            Facebook claim request
          </span>
        </Typography>

        <form onSubmit={handleSubmit} ref={formRef}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="label"
                name="label"
                label="Label Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="upc"
                name="upc"
                label="UPC"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="url"
                name="url"
                label="Facebook Video URL"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isAddLoading}
              >
                {isAddLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  "Submit Request"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default FacebookClaim;
