import { useProfileQuery } from "@/redux/slices/admin/userApi";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";

const AddressInformation = ({ data, onChange }: any) => {
  const { data: profileData } = useProfileQuery({});
  const [initialSetupDone, setInitialSetupDone] = useState(false);

  useEffect(() => {
    if (profileData?.data && !initialSetupDone) {
      const initialProfileData = {
        state: profileData.data.state || "",
        city: profileData.data.city || "",
        postCode: profileData.data.postCode || "",
        address: profileData.data.address || "",
        country: profileData.data.country || "",
      };

      onChange("address", initialProfileData);

      setInitialSetupDone(true);
    }
  }, [profileData, initialSetupDone, onChange]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      onChange("address", { ...data.address, [name]: value });
    },
    [onChange, data.address]
  );

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              value={data?.address.country}
              onChange={handleChange}
              name="country"
            >
              <MenuItem value="Bangladesh">Bangladesh</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="state"
            label="State"
            variant="outlined"
            fullWidth
            value={data?.address.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            value={data?.address.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="postCode"
            label="Post Code"
            variant="outlined"
            fullWidth
            value={data?.address.postCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={data?.address.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressInformation;
