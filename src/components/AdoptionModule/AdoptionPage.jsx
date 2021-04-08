import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import AdtBox from "./AdtBox";
import AdtopConfirm from "./AdtopConfirm";
import useStyles from "./styles";

const AdoptionPage = () => {
  const classes = useStyles();

  const adoptionData = [
    {
      dog_name: "Chief",
      dog_breed: "Labrador retriever",
      AGE: "2 yr 3 mnths",
      phone_number: 789546585,
    },
    {
      dog_name: "Rambo",
      dog_breed: "German Shepherd",
      AGE: "5 yr 1 mnth",
      phone_number: 789546585,
    },
  ];

  const [adoptClicked, setAdoptClicked] = useState(false);
  const [clickedPetDetails, setClickedPetDetails] = useState({});

  const handleAdoptClicked = (indvData) => {
    setAdoptClicked(true);
    console.log(`${indvData.dog_name}`);
    setClickedPetDetails(indvData);
  };

  //  const { adoptionData } = data;

  return (
    <div>
      <div className={classes.toolbar} />
      {!adoptClicked ? (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {adoptionData &&
            adoptionData.map((indvData, id) => (
              <Grid key={id} container item md={12} xs={12} lg={12} sm={12}>
                <AdtBox
                  indvData={indvData}
                  handleAdoptClicked={handleAdoptClicked}
                />
              </Grid>
            ))}
        </Grid>
      ) : (
        <AdtopConfirm clickedPetDetails={clickedPetDetails} />
      )}
    </div>
  );
};

export default AdoptionPage;
