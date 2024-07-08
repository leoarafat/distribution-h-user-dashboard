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
import { useGetFaqQuery } from "@/redux/slices/newsAndFaq/newsAndFaqApi";
import Loader from "@/utils/Loader";

const HelpPage = () => {
  const { data: faqData, isLoading } = useGetFaqQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const faqs = faqData ?? [];

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
          {faqs.map((faq: any, index: number) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Q: {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default HelpPage;
