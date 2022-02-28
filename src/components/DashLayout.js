import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WarehouseUsage from "./WarehouseUsage";
import BondUsage from "./BondUsage";
import WarehouseAgents from "./WarehouseAgents";
import DashboardHeader from "./DashboardHeader";
import { useDashboardStyles } from "./dashboard.style";
import { Divider } from "@material-ui/core";
import SideNav from "./SideNav";
import DashboardTable from "./DashboardTable";

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
          <SideNav />
        </Grid>
        <Grid
          item
          xs={8}
          style={{ width: "100%", height: "100vh", padding: "20px" }}
        >
          <DashboardHeader />
          <Divider />
          <DashboardTable />
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
