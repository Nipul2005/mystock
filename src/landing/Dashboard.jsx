import React from "react";
import Sidebar_menues from "../components/Sidebar_menues";
import Icons from "../components/Icons";

function Dashboard() {
  return (
    <div className="w-full h-full overflow-hidden lg:col-span-10 md:col-span-11 col-span-full md:row-span-12 row-span-11">
      <header className="w-full flex justify-between items-center gap-4 px-4 py-4 bg-white z-10 overflow-hidden border-b border-border">
        <div className="w-full flex justify-start gap-5 items-center">
          <Icons icon_name="menu-2" name="Search" classes="cursor-pointer" />
          <div className="w-full border border-border md:py-2 py-1 pl-4 pr-2 rounded-full flex justify-between items-center">
            <input
              name="search"
              type="text"
              className="w-full outline-none "
              placeholder="Search Products..."
            />

            <i className="ri-search-line text-primary font-semibold rounded-full cursor-pointer"></i>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-center gap-4">
          <Icons
            icon_name="notification-3"
            name="Notification"
            classes="relative text-xl after:content-[''] after:w-2 after:h-2 after:absolute after:top-0 after:right-0 after:bg-success after:rounded-full"
          />
          <div className="flex justify-between items-center gap-2">
            <div className="overflow-hidden md:w-10 md:h-10 w-8 h-8">
              <img src="/outless_icon.png" alt="its me" />
            </div>
            <span className="md:flex flex-col hidden">
              <p className="font-semibold text-md w-full">John Doe</p>
              <p className="text-sm text-text-muted">Admin</p>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Dashboard;
