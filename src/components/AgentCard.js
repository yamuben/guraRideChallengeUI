import { Stack, Avatar, Typography, Container } from "@mui/material";
import { useDashboardStyles } from "./dashboard.style";
import user from "../assets/images/user1.png";

const AgentCard = (props) => {
  const classes = useDashboardStyles();
  return (
    <Stack className={`${classes.mg0}`} direction="row">
      <Avatar alt="user-photo" src={user} />
      <Stack direction="column">
        <Typography className={classes.agentName}>{props.name}</Typography>
        <Container className={classes.agentRoleContainer}>
          <Typography className={classes.agentRoleText}>
            {props.role}
          </Typography>
        </Container>
      </Stack>
    </Stack>
  );
};

export default AgentCard;
