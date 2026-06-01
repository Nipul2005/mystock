function Sidebar_menues({ name, icon_name, classes, page }) {
  const currentPage = window.location.pathname;
  const isActive = currentPage === page;

  return (
    <span
      className={`
        md:w-full
        w-11
        md:h-12
        h-11

        flex
        items-center
        justify-center
        lg:justify-start

        gap-3

        md:px-4
        px-0

        rounded-2xl
        cursor-pointer
        shrink-0

        transition-all
        duration-200

        ${
          isActive
            ? "bg-primary text-white shadow-lg shadow-primary/20"
            : "text-text-secondary hover:bg-bg hover:text-primary"
        }

        ${classes}
      `}
    >
      <i
        className={`ri-${icon_name}-line text-xl`}
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
        {name}
      </h2>
    </span>
  );
}

export default Sidebar_menues;
