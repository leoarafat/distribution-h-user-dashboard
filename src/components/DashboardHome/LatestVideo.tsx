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
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { Link } from "react-router-dom";

const LatestVideo = () => {
  return (
    <Grid item xs={12} md={6}>
      <label
        htmlFor="music"
        style={{ display: "block", margin: "4px 0" }}
        className="p-3 border "
      >
        <Link to={"/upload"}>
          {" "}
          <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10 cursor-pointer">
            <LibraryAddIcon sx={{ fontSize: 60 }} />
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
          <Typography variant="h6">Lates Videos</Typography>
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
          <p className="mb-14"></p>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Thumbnail</TableCell>
                <TableCell>Video Name</TableCell>
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
                      <img
                        className="w-[90px] h-[60px] rounded-md"
                        src="https://cdnb.artstation.com/p/assets/images/images/020/421/613/large/raj-hossain-new-song-poster.jpg?1567700019"
                        alt=""
                      />
                    </TableCell>
                    <TableCell>Video Name</TableCell>
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

export default LatestVideo;