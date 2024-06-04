/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    Box,
    Typography,
    Paper,
    Grid,
    Divider,
  } from "@mui/material";

const News = () => {
    return (
        <Grid item xs={12} md={6}>
          {/* News */}
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">News</Typography>
            {Array(2)
              //@ts-ignore
              .fill()
              .map((_, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    Jan 15, 2024
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Divider sx={{ marginY: 1 }} />
                  <Typography variant="body2" align="right">
                    Regards, Be Musix
                  </Typography>
                </Box>
              ))}
          </Paper>
        </Grid>
    );
};

export default News;