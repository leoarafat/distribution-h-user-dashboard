import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AdditionalDetails: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="storePlatform"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel>Store Platform</InputLabel>
            <Select {...field} multiple variant="outlined">
              {/* Add your options here */}
              <MenuItem value="store1">Store 1</MenuItem>
              <MenuItem value="store2">Store 2</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="secondaryTrackType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Secondary Track Type"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="parentalAdvisory"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Parental Advisory"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
    </div>
  );
};

export default AdditionalDetails;
