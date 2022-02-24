import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Dashboard from "../views/DashboardView";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Index;
