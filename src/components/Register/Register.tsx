// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
// } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//     backgroundColor: "#f0f0f0",
//   },
//   paper: {
//     padding: theme.spacing(4),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     maxWidth: 400,
//     margin: "auto",
//     backgroundColor: "#ffffff",
//   },
//   form: {
//     marginTop: theme.spacing(3),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     height: 50,
//   },
// }));

// const Register = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNumber: "",
//     email: "",
//     password: "",
//     acceptTerms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === "acceptTerms" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log(formData);
//     // Example: Redirect to login page after successful registration
//     navigate("/login");
//   };

//   return (
//     <Grid
//       container
//       className={classes.root}
//       justify="center"
//       alignItems="center"
//     >
//       <Grid item xs={10} sm={8} md={6}>
//         <Paper className={classes.paper}>
//           <Typography variant="h5" component="h2" gutterBottom>
//             Register
//           </Typography>
//           <form className={classes.form} onSubmit={handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="phoneNumber"
//               label="Phone Number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   color="primary"
//                   checked={formData.acceptTerms}
//                   onChange={handleChange}
//                   name="acceptTerms"
//                 />
//               }
//               label="I accept the Terms and Conditions"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.button}
//               disabled={!formData.acceptTerms} // Disable button if terms not accepted
//             >
//               Register
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import newImg from "../../assets//register.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${newImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f0f0f0",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
    margin: "auto",
    backgroundColor: "#ffffff",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    height: 50,
  },
}));

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    acceptTerms: false,
    showPassword: false, // State to toggle password visibility
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "acceptTerms" ? checked : value,
    }));
  };

  const handlePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
    // Example: Redirect to login page after successful registration
    navigate("/login");
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
          <Typography variant="h5" component="h2" gutterBottom>
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={formData.showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handlePasswordVisibility}>
                    {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  name="acceptTerms"
                />
              }
              label="I accept the Terms and Conditions"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={!formData.acceptTerms} // Disable button if terms not accepted
            >
              Register
            </Button>
            <Typography variant="body2" style={{ marginTop: 10 }}>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;