function Sidebar_menues({ name, icon_name, classes, page }) {
  let currentPage = window.location.pathname || "Home";
  const isActive = currentPage === page;
  
  return (
    <span
    className={`
      md:w-full w-10 md:h-auto
      flex lg:justify-start justify-center items-center
      gap-3 md:px-3 md:py-2 md:my-1
      cursor-pointer rounded-full shrink-0
      transition-all duration-200 ease-in-out
      hover:bg-primary hover:text-white
      ${classes}
      p-1
      ${isActive ? "bg-primary text-white" : "text-text-primary"}
    `}
    >
      <i
        className={`ri-${icon_name}-line md:text-2xl text-xl`} //ri-search-line text-2xl rounded-full
        title={`${name}`} // icon adjacent name
      ></i>
      <h2 className="font-semibold lg:flex hidden">{name}</h2>
    </span>
  );
}

export default Sidebar_menues;
