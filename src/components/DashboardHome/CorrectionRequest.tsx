/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
const CorrectionRequest = () => {
  return (
    <Grid item xs={12} md={12}>
      {/* Correction Requested Songs */}
      <Paper sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6">Correction Requested Songs</Typography>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Album Name</TableCell>
                <TableCell>Label Name</TableCell>
                <TableCell>Store</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array(9)
                //@ts-ignore
                .fill()
                .map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>Jan 15, 2024</TableCell>
                    <TableCell>Album Name</TableCell>
                    <TableCell>Label Name</TableCell>
                    <TableCell>Store</TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default CorrectionRequest;
