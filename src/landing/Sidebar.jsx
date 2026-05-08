import React from "react";

function Sidebar() {
  return (
    <div className="border-2 border-primary col-span-0 sm:col-span-2 sm:flex hidden flex-col">
      <div className="w-full h-auto flex justify-center items-center border">
        <h1 className="lg:text-2xl md:text-xl text-lg font-bold ">OUTless</h1>  
      </div>
      <div className="w-full border"> </div>
    </div>
  );
}

export default Sidebar;
