import React from "react";
import Header from "../elements/Header";
import DashboardBody from "../elements/DashboardBody";

function Dashboard() {
  return (
    <div className="w-full h-full lg:col-span-10 md:col-span-11 col-span-full md:row-span-12 row-span-11 overflow-auto relative">
      <Header />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
