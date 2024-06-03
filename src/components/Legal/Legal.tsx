import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const Legal = () => {
  return (
    <div>
      <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
          Legal Information
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={6}>
          Welcome to our legal page. Here you can find important information
          regarding the upload of music to our platform.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <div>
          <Typography variant="h5" gutterBottom>
            Music Upload Guidelines
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem disablePadding>
              <ListItemText
                primary="Ensure you have the necessary rights to distribute the music."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Do not upload copyrighted material without permission."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Provide accurate metadata for each track, including title, artist name, and genre."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Upload high-quality audio files in supported formats."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Avoid uploading explicit or offensive content."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          </List>
        </div>

        <Divider sx={{ my: 4 }} />

        <div>
          <Typography variant="h5" gutterBottom>
            Legal Disclaimer
          </Typography>
          <Typography variant="body1" color="textSecondary">
            We are not responsible for any misuse or unauthorized distribution
            of music uploaded to our platform by users. By uploading music, you
            agree to indemnify and hold harmless our platform and its affiliates
            from any claims, damages, or liabilities arising from your use of
            the service.
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Legal;
