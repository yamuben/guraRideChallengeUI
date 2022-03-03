import {
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Box,
} from "@material-ui/core";
import { primaryBackground } from "../../helpers/constants";
import { useDashboardStyles } from "./dashboard.style";
import income from "../../assets/icons/income.svg";

const DashboardCard = (props) => {
  const classes = useDashboardStyles();
  return (
    <Card
      className={`${classes.bRadius} ${classes.dashboardCard} ${classes.mg1}`}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item className={`${classes.center} ${classes.orangeColor}`}>
            <Avatar
              style={{
                backgroundColor: primaryBackground,
                height: "70px",
                width: "70px",
              }}
            >
              <object
                data={props.icon}
                height="35"
                width="35"
                style={{ fill: "orangered" }}
              >
                svg
              </object>
            </Avatar>
          </Grid>
          <Grid item>
            <Typography
              className={classes.dashboardPrimaryText}
              style={{ color: props.color }}
            >
              {props.primaryText}
            </Typography>
            <Typography className={classes.dashboardSecondaryText}>
              {props.secondaryText}
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.center}>
          <Button className={classes.dashboardCardBtn} variant="contained">
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
