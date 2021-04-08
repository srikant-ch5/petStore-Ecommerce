import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(2),
    flexDirection: "row",

    height: "150px",
  },
  media: {
    paddingTop: "56.25%", // 16:9

    justifyContent: "flex-start",
  },
  imgDiv: {
    width: "220px",
    height: "320px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  detailsHeading: {
    color: "rgb(102, 102, 102)",
    fontFamily: "proxima-nova-regular",
    fontWeight: "900",
  },
  detailsSection2: {
    display: "flex",
    padding: "5px 0px 5px 10px",
    textAlign: "center",
  },
  detailsSubSection1: {
    display: "inline-block",
    padding: "0px 120px 0px 0px",
  },
  detailsSubSection2: {
    display: "inline-block",
    padding: "0px 80px 0px 120px",
  },
  adoptButton: {
    padding: "15px 0px 10px 20px",
  },
  divider: {
    margin: "5px 0",
  },
  toolbar: theme.mixins.toolbar,
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    display: "flex",
    justifyContent: "center",
  },
  confirmText: {
    padding: "20px 20px",
  },
  confirmButton: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 20px",
  },
}));
