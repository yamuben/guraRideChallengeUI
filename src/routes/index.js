import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/login/Login";
import Dashboard from "../pages/DashboardView";
import Challenge from "../pages/challenge";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Index;
