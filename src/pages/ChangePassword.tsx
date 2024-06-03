import { useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import { useChangePasswordMutation } from "@/redux/slices/admin/settingApi";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [changePassword, { isLoading, data, isSuccess, error }] =
    useChangePasswordMutation();

  useEffect(() => {
    if (isSuccess && data) {
      toast.success("Password changed successfully");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        console.error("Login error:", error);
      }
    }
  }, [data, error, isSuccess]);

  const onFinish = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const currentPassword = formData.get("currentPassword");
    const newPassword = formData.get("newPassword");
    const confirmPassword = formData.get("confirmPassword");

    try {
      await changePassword({ currentPassword, newPassword, confirmPassword });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Box
        component="form"
        onSubmit={onFinish}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "primary.main",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
        }}
      >
        <Typography variant="h4" component="h1" color="black" gutterBottom>
          Change Password
        </Typography>
        <TextField
          label="Current Password"
          name="currentPassword"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="New Password"
          name="newPassword"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={24} /> : null}
            fullWidth
          >
            {isLoading ? "Changing..." : "Update Password"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;
