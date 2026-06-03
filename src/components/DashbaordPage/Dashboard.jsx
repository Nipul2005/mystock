import DashboardBody from "./DashboardBody";
import Header from "./Header";


function Dashboard() {
  return (
    <div className="w-full h-full lg:col-span-10 md:col-span-11 col-span-full md:row-span-12 row-span-11 overflow-auto relative bg-bg">
      <Header />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
