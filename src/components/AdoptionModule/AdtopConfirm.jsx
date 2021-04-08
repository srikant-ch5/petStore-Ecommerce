import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import adoptionRules from "../../assests/adoptionRules.pdf";

const steps = ["Documents", "Confirmation"];
const AdtopConfirm = ({ clickedPetDetails }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [confirmClicked, setConfirmClicked] = useState(false);

  const handleAdoptConfirm = (clickedPetDetails) => {
    console.log(`Wants to adopt ${clickedPetDetails.dog_name}`);
    setConfirmClicked(true);
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.Paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((stepLabel) => (
              <Step key={stepLabel}>
                <StepLabel>{stepLabel}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {!confirmClicked ? (
            <>
              <Typography variant="body2" className={classes.confirmText}>
                Please confirm after reading{" "}
                <a href={adoptionRules}> this document</a> by downloading the
                document
              </Typography>
              <div className={classes.confirmButton}>
                <Button
                  variant="outlined"
                  type="button"
                  color="primary"
                  onClick={() => handleAdoptConfirm(clickedPetDetails)}
                >
                  {" "}
                  Confirm
                </Button>
              </div>
            </>
          ) : (
            <Typography variant="body2" className={classes.confirmText}>
              Thanks for Adopting {clickedPetDetails.dog_name}. We will take
              your request and get back to you
            </Typography>
          )}
        </Paper>
      </main>
    </>
  );
};

export default AdtopConfirm;
