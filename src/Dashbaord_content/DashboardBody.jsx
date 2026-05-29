import React from "react";
import StatsBoxes from "./StateBoxes";
import InventoryShowPeace from "./InventoryShowPeace";

function DashboardBody() {
  return (
    <div className="size-auto px-5 pt-6 pb-6">
      <div className="w-full flex lg:flex-row flex-col justify-between items-center">
        <div className="space-y-2 w-full">
          <h1 className="lg:text-5xl md:text-5xl text-3xl text-text-primary font-semibold">
            Dashboard
          </h1>
          <p className="text-text-muted text-md pl-1">
            Welcome back, John! Here's what's happening with your store today
          </p>
        </div>
        <StatsBoxes />
      </div>

      {/* <InventoryShowPeace /> */}
    </div>
  );
}

export default DashboardBody;
