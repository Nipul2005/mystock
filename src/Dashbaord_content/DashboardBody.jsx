import React from "react";
import StatsBoxes from "./StateBoxes";
import InventoryShowPeace from "./InventoryShowPeace";

function DashboardBody() {
  return (
    <div className="size-auto px-5 pt-12 pb-6">
      <div className="w-full flex lg:flex-row flex-col justify-between items-stretch gap-8">
        <div className="w-full bg-[url('/nature.jpg')] bg-cover bg-center p-8 flex justify-between items-end rounded-lg">
          <div className="space-y-2 px-4 py-6 text-white bg-black/80 rounded-xl">
            <h1 className="lg:text-5xl md:text-5xl text-4xl  font-semibold">
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
