import { Grid, Avatar, Typography, Container } from "@material-ui/core";
import { Stack } from "@mui/material"; //from "@material-ui/core";

import { useDashboardStyles } from "./dashboard.style";
import user from "../../assets/images/user1.png";

const AgentCard = (props) => {
  const classes = useDashboardStyles();
  return (
    <Grid container spacing={1} className={`${classes.mg0}`}>
      <Grid item>
        <Avatar alt="user-photo" src={user} />
      </Grid>
      <Grid item>
        <Stack direction="column">
          <Typography className={classes.agentName}>{props.name}</Typography>
          <Container className={classes.agentRoleContainer}>
            <Typography className={classes.agentRoleText}>
              {props.role}
            </Typography>
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AgentCard;
