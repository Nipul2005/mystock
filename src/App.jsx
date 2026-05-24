import Sidebar from "./landing/Sidebar";
import Dashboard from "./landing/Dashboard";

function App() {
  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-12 bg-bg relative text-black">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
