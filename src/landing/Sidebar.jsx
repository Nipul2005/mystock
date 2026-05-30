import React from "react";
import Sidebar_menues from "../components/Sidebar_menues";

function Sidebar() {
  let manues = [
    {
      name: "Home",
      icon: "home-4",
      page: "/Home",
    },
    {
      name: "Manage",
      icon: "store",
      page: "/Manage",
    },
    {
      name: "Create",
      icon: "apps-2-add",
      page: "/Create",
    },
    {
      name: "Search",
      icon: "search",
      page: "/Search",
    },
    {
      name: "Settings",
      icon: "settings-2",
      page: "/Settings",
    },
  ];

  return (
    <div className="md:h-full md:w-auto w-full text-black lg:px-2 px-4 shadow-2xl md:py-5 lg:col-span-2 md:col-span-1 md:row-span-12 row-span-1 row-start-12 col-span-full bg-white transition-all duration-300 ease-in flex md:flex-col md:justify-between md:item-start flex-row justify-center items-center md:border-0 border-y border-border z-10">
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
      {/* dashboard manues component */}
        {
          manues.map((manue,index)=>{
            return(
              <Sidebar_menues key={index} name={manue.name} icon_name={manue.icon} page={manue.page}/>
            )
          })
        }
        
      </div>

      <div className=""></div>

    </div>
  );
}

export default Sidebar;
