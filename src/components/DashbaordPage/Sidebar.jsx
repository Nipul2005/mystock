import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidebar_menues from "./Sidebar_menues";
import { useSelector } from "react-redux";
import Profile from "../Common/Profile";

function Sidebar() {
  let manues = [
    {
      name: "Manage",
      icon: "store",
    },
    {
      name: "Create",
      icon: "apps-2-add",
    },
    {
      name: "Settings",
      icon: "settings-2",
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

      <div className="w-full h-auto flex md:flex-col md:justify-start md:items-start flex-row justify-between items-center gap-x-4 md:gap-y-2 py-1">
        <NavLink
          to={`/home`}
          end
          className={({ isActive }) =>
            `md:w-full flex items-center justify-center lg:justify-start gap-3 rounded-2xl md:py-2 cursor-pointer  hover:text-white shrink-0 transition-all duration-200 px-4 py-0.5 ${isActive ? "bg-accent text-white" : "hover:bg-accent/60 hover:text-white "}`
          }
        >
          <i
            className={`ri-home-4-line text-xl w-auto h-auto rounded-full`}
            title={"dashboard"}
          ></i>

          <h2
            className={`
          hidden
          lg:block
          font-medium
          text-[15px]
        `}
          >
            Home
          </h2>
        </NavLink>
        {manues.map((manue, index) => {
          return (
            <Sidebar_menues
              key={index}
              name={manue.name.toLowerCase()}
              icon_name={manue.icon}
              fieldName={manue.name}
            />
          );
        })}
      </div>

      <div className="hidden md:block w-full">
        <Profile />
      </div>
    </div>
  );
}

export default Sidebar;
