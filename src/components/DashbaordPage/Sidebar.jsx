import { Link, useNavigate } from "react-router-dom";
import Sidebar_menues from "./Sidebar_menues";
import Logout from "../../functions/Logout";

function Sidebar() {
  
  let manues = [
    {
      name: "Home",
      icon: "home-4",
      page: 0,
    },
    {
      name: "Manage",
      icon: "store",
      page: 1,
    },
    {
      name: "Create",
      icon: "apps-2-add",
      page: 3,
    },
    {
      name: "Search",
      icon: "search",
      page: 4,
    },
    {
      name: "Settings",
      icon: "settings-2",
      page: 5,
    },
  ];



  return (
    <div className="md:h-full md:w-auto w-full text-black lg:px-2 px-4 shadow-2xl md:py-5 md:pt-3 lg:col-span-2 md:col-span-1 md:row-span-12 row-span-1 row-start-12 col-span-full bg-white transition-all duration-300 ease-in flex md:flex-col md:justify-between md:item-start flex-row justify-center items-center md:border-0 border-y border-border z-20">
      <div className="w-full md:flex hidden flex-col items-center pt-4">
        <Link to="/">
          <img
            src="/bizsphere_logo.png"
            alt="BizSphere"
            className="hidden lg:block object-contain"
          />

          <img
            src="/bizsphere_icon.png"
            alt="BizSphere"
            className="w-14 h-14 lg:hidden object-contain"
          />
        </Link>
      </div>

      <div className="w-full h-auto flex md:flex-col md:justify-start md:items-start flex-row justify-between items-center gap-x-4 md:gap-y-2">
        {manues.map((manue, index) => {
          return (
            <Sidebar_menues
              key={index}
              name={manue.name}
              icon_name={manue.icon}
              page={manue.page}
            />
          );
        })}
      </div>

      <div className="hidden md:block w-full">
        <div className="mx-2 p-3 rounded-2xl bg-bg border border-border">
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold">
              JD
            </div>

            <div className="hidden lg:block">
              <h4 className="font-semibold text-sm text-text-primary">
                John Doe
              </h4>

              <p className="text-xs text-text-secondary">Business Owner</p>
            </div> */}
            <Logout/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
