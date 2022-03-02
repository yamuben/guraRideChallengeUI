import { Box, Typography, Container, Avatar } from "@material-ui/core";
import { useDashboardStyles } from "./dashboard.style";
import NotificationsIcon from "@material-ui/icons/Notifications";

const DashboardHeader = () => {
  const classes = useDashboardStyles();

  return (
    <Box className={classes.headerContainer}>
      <Typography className={classes.headerText}>Hello Cedric!</Typography>
      <Box className={classes.headerContainerLeft}>
        <Container>input</Container>
        <Container>
          <Avatar>
            <NotificationsIcon />
          </Avatar>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
