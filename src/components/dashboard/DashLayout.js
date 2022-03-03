import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WarehouseUsage from "./WarehouseUsage";
import BondUsage from "./BondUsage";
import WarehouseAgents from "./WarehouseAgents";
import DashboardHeader from "./DashboardHeader";
import { useDashboardStyles } from "./dashboard.style";
import {
  Divider,
  FormControl,
  Button,
  Input,
  InputAdornment,
} from "@material-ui/core";
import SideNav from "./SideNav";
import DashboardCard from "./DashboardCard";
import AgentCard from "./AgentCard";
import income from "../../assets/icons/income.svg";
import expense from "../../assets/icons/expenses.svg";
import entries from "../../assets/icons/entries.svg";
import exits from "../../assets/icons/exits.svg";
import BasicTabs from "./TabsPanel";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const cardStyle = {
  padding: "10px",
  height: "100vh",
  background: "white",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
};

const DashLayout = () => {
  const classes = useDashboardStyles();
  return (
    <Box style={{ width: "100%", minHeight: "100vh", background: "#F5F5F5" }}>
      <Grid container spacing={0}>
        <Grid item xs={2} style={cardStyle}>
          <AgentCard
            photo="../assets/images/user1.png"
            name="Cedric Manzi"
            role="Exit"
          />
          <SideNav />
        </Grid>
        <Grid
          item
          xs={8}
          style={{ width: "100%", height: "100vh", padding: "20px" }}
        >
          <DashboardHeader />
          <Divider />
          <Box className={classes.dashboardActions}>
            <FormControl variant="standard">
              <Input
                className={`${classes.dashboardSearch} ${classes.mg1}`}
                placeholder="Search Dashboard..."
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon color="#9E9E9E" />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              className={classes.dashboardActionBtn}
              startIcon={<AddCircleIcon />}
              variant="contained"
            >
              Add New Agent
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <DashboardCard
                primaryText="13"
                secondaryText="New Entries"
                color="#26AAE1"
                icon={entries}
              />
            </Grid>
            <Grid item xs={3}>
              <DashboardCard
                primaryText="27"
                secondaryText="New Exits"
                color="#2C358D"
                icon={exits}
              />
            </Grid>
            <Grid item xs={3}>
              <DashboardCard
                primaryText="100$"
                secondaryText="Total Income"
                color="#00A44B"
                icon={income}
              />
            </Grid>
            <Grid item xs={3}>
              <DashboardCard
                primaryText="200$"
                secondaryText="Total Expenses"
                color="#EF2D56"
                icon={expense}
              />
            </Grid>
          </Grid>
          <BasicTabs />
        </Grid>
        <Grid item xs={2} className={classes.rightRoot}>
          <WarehouseUsage />
          <BondUsage />
          <WarehouseAgents />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashLayout;
