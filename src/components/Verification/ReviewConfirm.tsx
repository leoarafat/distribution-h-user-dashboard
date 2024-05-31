import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 200,
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const ReviewConfirm = ({ data }: any) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Label Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Company Name:</strong> {data.label.companyName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Label Name:</strong> {data.label.labelName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>YouTube Channel Link:</strong>{" "}
            <a
              href={data.label.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.label.youtubeChannel}
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Account Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Email:</strong> {data.profile.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Phone:</strong> {data.profile.phoneNumber}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Address Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Address:</strong> {data.address.address}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>City:</strong> {data.address.city}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>State:</strong> {data.address.state}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Country:</strong> {data.address.country}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <strong>Post Code:</strong> {data.address.postCode}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Images
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={URL.createObjectURL(data.profile.profileImage)}
              title="Profile Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Profile Image
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={URL.createObjectURL(data.profile.nidFront)}
              title="NID Front Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                NID Front Image
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={URL.createObjectURL(data.profile.nidBack)}
              title="NID Back Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                NID Back Image
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={URL.createObjectURL(data.label.dashboardImage)}
              title="Dashboard Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Dashboard Image
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={URL.createObjectURL(data.label.copyRightImage)}
              title="Copy Right Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Copy Right Image
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewConfirm;
