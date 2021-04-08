import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  cardDetails,
  Typography,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import labimg from "../../assests/labimg.jpg";

const AdtBox = ({ indvData, handleAdoptClicked }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.imgDiv}>
        <CardMedia className={classes.media} image={labimg} />
      </div>
      <div>
        <CardContent className={classes.details}>
          <Grid item style={{ padding: "0px 10px", display: "flex" }}>
            <Typography className={classes.detailsHeading} gutterBottom>
              Name :
            </Typography>
            <Typography
              style={{ padding: "2px 0px 0px 20px", fontWeight: "500" }}
              variant="body2"
              gutterBottom
            >
              {indvData.dog_name}
            </Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid style={{ display: "flex" }}>
            <Grid container className={classes.detailsSection2} md={12}>
              <Grid item style={{}} spacing={3}>
                <Typography className={classes.detailsHeading} gutterBottom>
                  Breed
                </Typography>
                <Typography gutterBottom variant="body2">
                  {indvData.dog_breed}
                </Typography>
              </Grid>
              <Grid item className={classes.detailsSubSection2} spacing={3}>
                <Typography className={classes.detailsHeading} gutterBottom>
                  Age
                </Typography>
                <Typography gutterBottom variant="body2">
                  {indvData.AGE}
                </Typography>
              </Grid>
              <Grid item className={classes.detailsSubSection2} spacing={3}>
                <Typography className={classes.detailsHeading} gutterBottom>
                  Phone Number
                </Typography>
                <Typography gutterBottom variant="body2">
                  {indvData.phone_number}
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.adoptButton}>
              <Button
                onClick={() => handleAdoptClicked(indvData)}
                size="medium"
                type="button"
                variant="outlined"
                color="primary"
              >
                Adopt
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
};

export default AdtBox;
