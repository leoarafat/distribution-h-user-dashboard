import {
  Box,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

const PaymentMethodModal = ({ open, onClose }: any) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const onPaymentMethodChange = (e: any) => {
    e.preventDefault();
    setPaymentMethod(e.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="payment-method-modal-title"
      aria-describedby="payment-method-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="payment-method-modal-title" variant="h6" component="h2">
          Select Payment Method
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="payment-method-select-label">
            Payment Method
          </InputLabel>
          <Select
            labelId="payment-method-select-label"
            id="payment-method-select"
            value={paymentMethod}
            label="Payment Method"
            onChange={onPaymentMethodChange}
          >
            <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            <MenuItem value="Mobile Banking">Mobile Banking</MenuItem>
            <MenuItem value="Payoneer">Payoneer</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={onClose}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PaymentMethodModal;
