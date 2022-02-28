import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  primaryGreen,
  primaryGrey,
  primaryOrange,
  primaryPurple,
  primaryBlue,
  primaryTextColor,
} from "../helpers/constants";

export const useDashboardStyles = makeStyles((Theme) =>
  createStyles({
    rightRoot: {
      padding: "10px 25px",
      backgroundColor: "white",
    },
    wUsagecard: {
      backgroundColor: primaryGreen,
      color: "white",
    },
    wAgentscard: {
      backgroundColor: primaryGrey,
      color: "black",
      boxShadow: "none",
    },
    bUsagecard: {
      backgroundColor: primaryOrange,
      color: "white",
    },
    bRadius: {
      borderRadius: "20px",
    },
    mgTop0: {
      marginTop: "10px",
    },
    mgTop1: {
      marginTop: "20px",
    },
    mg0: {
      margin: "10px 0",
    },
    mg1: {
      margin: "15px 0",
    },
    statusBtn: {
      borderRadius: "20px",
      margin: "0 auto",
      backgroundColor: "white",
      width: "100%",
      boxShadow: "none",
      textTransform: "none",
      padding: "5px auto",
    },
    wAgentscardBtn: {
      backgroundColor: primaryBlue,
      color: "white",
      width: "100%",
      boxShadow: "none",
      borderRadius: "20px",
    },
    orangeColor: {
      color: primaryOrange,
    },
    greenColor: {
      color: primaryGreen,
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
    cProgress: {
      color: "yellow",
    },
    percentage: {
      fontSize: "30px",
    },
    percentageLabel: {
      fontSize: "8px",
    },
    agentName: {
      fontSize: "14px",
    },
    agentRoleContainer: {
      backgroundColor: primaryPurple,
      color: "white",
      textTransform: "uppercase",
      borderRadius: "20px",
    },
    agentRoleText: {
      fontSize: "12px",
    },
    headerContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "spaceBetween",
    },
    headerText: {
      color: primaryBlue,
      fontSize: "40px",
    },
  })
);

export const useNavStyles = makeStyles((Theme) =>
  createStyles({
    list: {
      listStyle: "none",
      color: "black",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      color: "#0060B6",
      "&:hover": {
        color: primaryBlue,
      },
    },
    linkItem: {
      width: "100%",
      textDecoration: "none",
      fontSize: "18px",
      color: primaryTextColor,
      "&:hover": {
        color: primaryBlue,
      },
    },
    mg1: {
      margin: "15px 0",
    },
  })
);
