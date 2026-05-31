import Sidebar from "./landing/Sidebar";
import Dashboard from "./landing/Dashboard";
import Container from "./components/Container";
import {Routes, Route} from "react-router-dom"
import DashbaordHome from "./pages/others/DashboardHome";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/others/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashbaordHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
