import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/reducers/pageSlice";

function Sidebar_menues({ name, icon_name, classes, page }) {
  const pageState = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  return (
    <span
      className={`md:w-full flex items-center justify-center lg:justify-start gap-3 rounded-2xl cursor-pointer shrink-0 transition-all duration-200 border border-accent px-4 py-0.5
        ${page === pageState && "bg-accent text-white"}
        ${classes}
      `}
      onClick={() => dispatch(setPage(page))}
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
        {name}
      </h2>
    </span>
  );
}

export default Sidebar_menues;
