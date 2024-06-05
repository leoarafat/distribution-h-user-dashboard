/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { Link } from "react-router-dom";
import LatestVideo from "./LatestVideo";
const LastSixApproved = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {/* Last 6 Approved Tracks */}

        <label
          htmlFor="music"
          style={{ display: "block", margin: "4px 0" }}
          className="p-3 border "
        >
          <Link to={"/upload"}>
            {" "}
            <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10 cursor-pointer">
              <AudiotrackIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="hidden">
              <p
                id="music"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                  cursor: "pointer",
                }}
              />
            </div>
          </Link>
        </label>
        <Paper sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Typography variant="h6">Last 6 Approved Tracks</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
              position: "relative",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={100}
              size={60}
              sx={{ color: "green" }}
            />
            <Typography variant="h4" sx={{ position: "absolute" }}>
              06
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Album Image</TableCell>
                  <TableCell>Album Name</TableCell>
                  <TableCell>Label Name</TableCell>
                  <TableCell>Store</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array(6)
                  //@ts-ignore
                  .fill()
                  .map((_, index) => (
                    <TableRow key={index}>
                      <TableCell>Jan 15, 2024</TableCell>
                      <TableCell>
                        {" "}
                        <img
                          className="w-[90px] h-[60px] rounded-md"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8_RCV3yxcNBl4G7Xq0e1xCa73PhR-kYNPg&s"
                          alt=""
                        />
                      </TableCell>
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
      {/* Last 6 Approved Video */}
      <LatestVideo />
    </Grid>
  );
};

export default LastSixApproved;
