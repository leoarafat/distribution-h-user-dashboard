import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Input,
  Link,
} from "@material-ui/core";
import bgImage from "../../assets/otp.jpg";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     height: "100vh",
  //     backgroundImage: `url(${bgImage})`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     backgroundColor: "#f0f0f0",
  //   },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Add some transparency to the background color
    borderRadius: 10, // Add border radius for a softer look
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: "#333", // Darken the title color for better readability
  },
  subTitle: {
    marginBottom: theme.spacing(4),
    color: "#555", // Adjust the color of the subtitle for better contrast
  },
  form: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    height: 60,
  },
  input: {
    width: 60,
    marginRight: 20,
    textAlign: "center",
    fontSize: 24,
  },
  goBack: {
    marginTop: theme.spacing(2),
    color: "#666", // Adjust the color of the "Go Back" link
  },
}));

const Verify = () => {
  const classes = useStyles();
  const [codes, setCodes] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Move focus to the next input field
    if (value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add verification logic here
    const code = codes.join("");
    console.log("Verification code:", code);
    // Example: Navigate to another page after successful verification
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={10} sm={8} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" className={classes.title}>
            OTP Verification
          </Typography>
          <Typography variant="body1" className={classes.subTitle}>
            Thank you for registering with us. Please type the OTP as shared on
            your mobile.
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div>
              {codes.map((code, index) => (
                <Input
                  type="number"
                  key={index}
                  className={classes.input}
                  inputRef={inputRefs[index]}
                  value={code}
                  onChange={(e) => handleChange(index, e.target.value)}
                  inputProps={{ maxLength: 1 }}
                />
              ))}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={codes.some((code) => code === "")}
            >
              Verify
            </Button>
            <Typography variant="body2" className={classes.goBack}>
              <Link href="/register">Go back</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Verify;