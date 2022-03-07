import React from "react";
import { Routes, Route } from "react-router-dom";
import Challenge from "../pages/challenge";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Challenge />} />
      </Routes>
    </>
  );
};

export default Index;
