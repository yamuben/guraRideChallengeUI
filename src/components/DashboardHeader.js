import { Box, Typography, Container } from "@material-ui/core";
import { useDashboardStyles } from "./dashboard.style";

const DashboardHeader = () => {
  const classes = useDashboardStyles();

  return (
    <Box className={classes.headerContainer}>
      <Typography className={classes.headerText}>Hello Cedric!</Typography>
      <Box>
        <Container>input</Container>
        <Container>Notification</Container>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
