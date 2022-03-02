import { CircularProgress } from "@material-ui/core";
import { Button, Card, CardContent, Typography, Box } from "@material-ui/core";
import { useDashboardStyles } from "./dashboard.style";

const BondUsage = () => {
  const classes = useDashboardStyles();
  return (
    <Card
      className={`${classes.mgTop1} ${classes.bUsagecard} ${classes.bRadius}`}
    >
      <CardContent>
        <Typography>Bond Status</Typography>
        <Box className={`${classes.center} ${classes.mg1}`}>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              style={{
                color: "#EEC643",
                position: "absolute",
                top: "-0.8px",
                left: "0",
                zIndex: "10",
              }}
              size={90}
              thickness={2}
              value={58}
            />
            <CircularProgress
              variant="determinate"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              size={88}
              thickness={1}
              value={100}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography className={classes.percentage}>58%</Typography>
              <Typography className={classes.percentageLabel}>
                Amount Used
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          className={`${classes.statusBtn} ${classes.orangeColor} ${classes.mg1}`}
        >
          Status
        </Button>
      </CardContent>
    </Card>
  );
};

export default BondUsage;
