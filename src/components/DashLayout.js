import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const cardStyle = {
  padding: "40px",
  height: "100vh",
  background: "white",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
};

const DashLayout = () => {
  return (
    <Box style={{ width: "100%", minHeight: "100vh", background: "#F5F5F5" }}>
      <Grid container spacing={0}>
        <Grid item xs={2} style={cardStyle}>
jkhk
        </Grid>
        <Grid
          item
          xs={8}
          style={{  height: "100vh",  padding: "40px", }}
        >
hhh
        </Grid>
        <Grid
          item
          xs={2}
          style={cardStyle}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default DashLayout;
