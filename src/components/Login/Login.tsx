import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "@/redux/slices/admin/adminManageApi";
import { storeUserInfo } from "@/redux/services/auth.service";
import toast from "react-hot-toast";
import loginImage from "../../assets/login.jpg"; // Import your login image here

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${loginImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    height: 50,
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [adminLogin, { isLoading, data, isSuccess, error }] =
    useAdminLoginMutation();

  useEffect(() => {
    if (isSuccess && data) {
      toast.success("Login Successful");
      storeUserInfo({ accessToken: data?.data?.accessToken });
      navigate("/");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        console.error("Login error:", error);
      }
    }
  }, [isSuccess, data, error, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await adminLogin({ email: email.value, password: password.value });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
              className={classes.button}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </Button>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Link href="/auth/forget-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;