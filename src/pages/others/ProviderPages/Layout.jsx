import React from "react";
import Container from "../../../components/Common/Container";
import Sidebar from "../../../components/DashbaordPage/Sidebar";
import Dashboard from "./Home";

function DashbaordHome() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

export default DashbaordHome;
