import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assests/logo.jpg";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" classname={classes.appBar} color="inherit">
        <Toolbar overflow="auto">
          <img
            src={logo}
            alt="Commerce.js"
            height="25px"
            className={classes.image}
          />
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            PetStore
          </Typography>
          <Typography
            component={Link}
            to="/food"
            variant="overline"
            className={classes.navFirstCategory}
            gutterBottom
          >
            Nutrition
          </Typography>
          <Typography
            component={Link}
            to="/toys"
            variant="overline"
            className={classes.navCategory}
            gutterBottom
          >
            Toys
          </Typography>
          <Typography
            component={Link}
            to="/Adoption"
            variant="overline"
            className={classes.navCategory}
            gutterBottom
          >
            Adoption
          </Typography>
          {/*below div is self growing div which will take space on the left*/}
          <div className={classes.grow} />

          {(location.pathname === "/" ||
            location.pathname === "/toys" ||
            location.pathname === "/food" ||
            location.pathname === "/Medicines") && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
