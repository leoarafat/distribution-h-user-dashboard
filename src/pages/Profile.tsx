import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  IconButton,
  Avatar,
  Box,
  CircularProgress,
} from "@mui/material";
import { Edit, Upload } from "lucide-react";
import toast from "react-hot-toast";
import {
  useMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/slices/admin/settingApi";
import { imageURL } from "@/redux/api/baseApi";

const Profile = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { data: profileData, isLoading: profileLoading } = useMyProfileQuery(
    {}
  );
  const initialFormValues = profileData?.data;

  const [updateProfile, { isLoading, isSuccess, error }] =
    useUpdateProfileMutation();

  useEffect(() => {
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        alert(errorData.data.message);
      } else {
        console.error("Login error:", error);
      }
    }
  }, [error, isSuccess]);

  if (profileLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const src = profileData?.data?.image?.startsWith("https")
    ? profileData?.data?.image
    : `${imageURL}/${profileData?.data?.image}`;

  const onFinish = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (image) {
      formData.append("profileImage", image);
    }
    formData.append("name", formData.get("name"));
    formData.append("phoneNumber", formData.get("phoneNumber"));
    formData.append("address", formData.get("address"));
    formData.append("city", formData.get("city"));
    formData.append("country", formData.get("country"));
    formData.append("postalCode", formData.get("postalCode"));

    try {
      const res = await updateProfile(formData);

      if (res?.data?.success === true) {
        toast.success("Profile Update Successful");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          marginTop: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {!openEdit && (
            <IconButton onClick={() => setOpenEdit(!openEdit)}>
              <Edit size={20} />
            </IconButton>
          )}
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 112,
            height: 112,
            margin: "0 auto",
          }}
        >
          {openEdit ? (
            <div>
              <input
                onChange={handleImageChange}
                type="file"
                className="hidden"
                id="imageUpload"
                style={{ display: "none" }}
              />
              <label
                htmlFor="imageUpload"
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Avatar
                  src={imagePreview ? imagePreview : src}
                  sx={{ width: 112, height: 112 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "50%",
                    padding: 1,
                  }}
                >
                  <Upload color="#fff" />
                </Box>
              </label>
            </div>
          ) : (
            <Avatar src={src} sx={{ width: 112, height: 112 }} />
          )}
        </Box>
        <Typography variant="h4" sx={{ marginTop: 2 }}>
          {initialFormValues?.name}
        </Typography>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        {!openEdit ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                defaultValue={initialFormValues?.name}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                defaultValue={initialFormValues?.email}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                defaultValue={initialFormValues?.phoneNumber}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                defaultValue={initialFormValues?.address}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                defaultValue={initialFormValues?.city}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                defaultValue={initialFormValues?.country}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Postal Code"
                defaultValue={initialFormValues?.postCode}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        ) : (
          <form onSubmit={onFinish}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  defaultValue={initialFormValues?.name}
                  name="name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  defaultValue={initialFormValues?.email}
                  name="email"
                  fullWidth
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  defaultValue={initialFormValues?.phoneNumber}
                  name="phoneNumber"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  defaultValue={initialFormValues?.address}
                  name="address"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="City"
                  defaultValue={initialFormValues?.city}
                  name="city"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Country"
                  defaultValue={initialFormValues?.country}
                  name="country"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Postal Code"
                  defaultValue={initialFormValues?.postCode}
                  name="postCode"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", marginTop: 4 }}>
              <Button type="submit" variant="contained" color="primary">
                {isLoading ? "Saving.." : "Save changes"}
              </Button>
            </Box>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
