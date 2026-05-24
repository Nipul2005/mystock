import React from "react";
import StatsBoxes from "./StateBoxes";

function DashboardBody() {
  return (
    <div className="size-full px-5 pt-6 pb-4">
      <div className="w-full space-y-1">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-text-primary font-semibold">
          Dashboard
        </h1>
        <p className="text-text-muted text-md pl-1">Welcome back, John! Here's what's happening with your store today</p>
      </div>

      <StatsBoxes />
    </div>
  );
}

export default DashboardBody;
