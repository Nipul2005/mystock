import { NavLink } from "react-router-dom";

function Sidebar_menues({ name, icon_name, fieldName }) {
  return (
    <NavLink
      to={`/dashboard/${name}`}
      className={({
        isActive,
      }) => `md:w-full flex items-center justify-center lg:justify-start gap-3 rounded-2xl md:py-2 cursor-pointer shrink-0 transition-all duration-200 px-4 py-0.5
      ${isActive ? "bg-accent text-white" : "hover:bg-accent/60 hover:text-white "}`}
    >
      <i
        className={`ri-${icon_name}-line text-xl w-auto h-auto rounded-full`}
        title={name}
      ></i>

      <h2
        className={`
          hidden
          lg:block
          font-medium
          text-[15px]
        `}
      >
        {fieldName}
      </h2>
    </NavLink>
  );
}

export default Sidebar_menues;
