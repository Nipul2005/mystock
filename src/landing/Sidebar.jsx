import React from "react";
import Sidebar_menues from "../components/Sidebar_menues";

function Sidebar() {
  let manues=[
    {
      name: "Home",
      icon:"home-4"
    },
    {
      name: "Manage",
      icon:"store-line text-2xl rounded-full"
    },
    {
      name: "Create",
      icon:"apps-2-add"
    },
    {
      name: "Search",
      icon:"search-line text-2xl"
    },
  ]

  return (
    <div className="md:h-full md:w-auto w-full text-black lg:px-2 px-4 shadow-2xl md:py-5 lg:col-span-2 md:col-span-1 md:row-span-12 row-span-1 row-start-12 col-span-full bg-white transition-all duration-300 ease-in flex md:flex-col md:justify-between md:item-start flex-row justify-center items-center z-10 md:border-0 border-t border-black/40">
      <div className="justify-center items-center overflow-hidden w-full md:flex hidden">
        <img
          src="/outless_logo.png"
          alt="Outless Logo"
          className="w-full h-full object-cover bg-white hidden lg:block"
        />

        <img
          src="/outless_icon.png"
          alt="Outless Logo"
          className="w-full h-full object-cover bg-white block lg:hidden"
        />
      </div>
      <div className="w-full h-auto flex md:flex-col md:justify-start md:items-start flex-row justify-between items-center gap-x-4">

{/* side bar manue component rendering */}
        {
          manues.map((val, id)=>{
            return <Sidebar_menues key={id} name={val.name} icon_name={val.icon}/>
          })
        }
        
      </div>
      <div className="w-full md:flex lg:justify-start justify-center items-center gap-3 md:px-3 md:py-2 md:my-1 cursor-pointer md:hover:bg-black/50 md:hover:text-white rounded-lg hidden shrink-0">
        <i className="ri-settings-2-line text-2xl" title="Settings"></i>
        <h2 className="text-lg font-semibold lg:flex hidden">Settings</h2>
      </div>
    </div>
  );
}

export default Sidebar;
