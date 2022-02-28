import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { useDashboardStyles } from "./dashboard.style";
import AgentCard from "./AgentCard";

const WarehouseAgents = () => {
  const classes = useDashboardStyles();
  return (
    <Card
      className={`${classes.mgTop1} ${classes.wAgentscard} ${classes.bRadius}`}
    >
      <CardContent>
        <Typography style={{ color: "#6D6D6D" }}>Warehouse Agents</Typography>
        <AgentCard
          photo="../assets/images/user1.png"
          name="Philip Rukundo"
          role="Finance"
        />
        <Divider />
        <AgentCard
          photo="../assets/images/user1.png"
          name="Fabrice Ganza"
          role="Engineer"
        />
        <Divider />
        <AgentCard
          photo="../assets/images/user1.png"
          name="Cedric Manzi"
          role="Exit"
        />
        <Button
          variant="contained"
          className={`${classes.wAgentscardBtn} ${classes.mgTop0}`}
        >
          See All
        </Button>
      </CardContent>
    </Card>
  );
};

export default WarehouseAgents;
