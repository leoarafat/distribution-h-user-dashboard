import React from "react";
import {
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HelpPage = () => {
  return (
    <div>
      <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
          Music Dashboard Help
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={6}>
          Welcome to the Music Dashboard Help page! Here, you can find
          information and assistance on using our music dashboard.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <div>
          <Typography variant="h5" gutterBottom>
            Getting Started
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem disablePadding>
              <ListItemText
                primary="Step 1: Sign up or log in to your account."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Step 2: Navigate to the dashboard page."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Step 3: Explore your music library and playlists."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Step 4: Customize your dashboard settings."
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          </List>
        </div>

        <Divider sx={{ my: 4 }} />

        <div>
          <Typography variant="h5" gutterBottom>
            FAQs
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq-content"
              id="faq-header"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Q: How do I add songs to my playlist?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To add songs to your playlist, simply...
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq-content"
              id="faq-header"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Q: Can I create multiple playlists?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes, you can create multiple playlists by...
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq-content"
              id="faq-header"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Q: How do I delete a playlist?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To delete a playlist, navigate to...
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq-content"
              id="faq-header"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Q: Is there a limit to the number of songs in a playlist?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                No, there is no limit to the number of songs...
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq-content"
              id="faq-header"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Q: How do I change my account settings?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To change your account settings, go to...
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
};

export default HelpPage;
