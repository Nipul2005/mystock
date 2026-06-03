import DashboardBody from "../../../components/DashbaordPage/DashboardBody";
import Header from "../../../components/DashbaordPage/Header";
import { useSelector } from "react-redux";
import Manage from "./Manage";
import Create from "./Create";
import Search from "./Search";
import Settings from "./Setting";

function Dashboard() {
  const page = useSelector((state) => state.page.page);
  return (
    <div className="w-full h-full lg:col-span-10 md:col-span-11 col-span-full md:row-span-12 row-span-11 overflow-auto relative bg-bg">
      <Header />
      {page === 0 && <DashboardBody />}
      {page === 1 && <Manage />}
      {page === 3 && <Create />}
      {page === 4 && <Search />}
      {page === 5 && <Settings />}
    </div>
  );
}

export default Dashboard;
