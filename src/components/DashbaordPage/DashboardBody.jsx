import React from "react";
import StatsBoxes from "./StateBoxes";
import InventoryShowPeace from "./InventoryShowPeace";
import { useSelector } from "react-redux";

function DashboardBody() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden bg-linear-to-r from-primary to-blue-500 p-8 md:p-10">
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Business Overview
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Welcome back, {user.name} 👋
          </h1>

          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Track customer requests, manage your services, and monitor business
            performance from one place.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <button className="px-6 py-3 bg-white text-primary rounded-2xl font-semibold">
              Add Service
            </button>

            <button className="px-6 py-3 border border-white/20 text-white rounded-2xl">
              View Requests
            </button>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <i className="ri-briefcase-4-line text-[300px] text-white"></i>
        </div>
      </section>

      {/* Stats */}
      <StatsBoxes />

      {/* Services */}
      <InventoryShowPeace />
    </div>
  );
}

export default DashboardBody;
