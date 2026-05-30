import React from "react";
import StatsBoxes from "./StateBoxes";
import InventoryShowPeace from "./InventoryShowPeace";

function DashboardBody() {
  return (
    <div className="size-auto">
      <div className="w-full flex lg:flex-row flex-col justify-between items-stretch gap-7 bg-[url('/nature.jpg')] bg-cover bg-center md:px-8 px-5 md:py-22 py-12">
        <div className="w-full flex justify-between items-start rounded-lg">
          <div className="space-y-2 text-white ">
            <h1 className="lg:text-8xl md:text-6xl text-5xl  font-semibold">
              Outless
            </h1>
            <p className="text-text-muted text-md pl-1">
              Welcome back, John! Here's what's happening with your store today
            </p>
          </div>
        </div>
        <StatsBoxes />
      </div>

      {/* <InventoryShowPeace /> */}
    </div>
  );
}

export default DashboardBody;
