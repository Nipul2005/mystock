import Sidebar from "./landing/Sidebar";
import Dashboard from "./landing/Dashboard";

function App() {
  return (
    <div className="w-full h-full border-2 border-success grid grid-cols-12">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
