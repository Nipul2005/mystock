import {Routes, Route} from "react-router-dom"
import Home from "./pages/others/ConsumerPages/Home";
import Layout from "./pages/others/ProviderPages/Layout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Services from "./pages/others/ConsumerPages/Service";
import Categories from "./pages/others/ConsumerPages/Category";
import Providers from "./pages/others/ConsumerPages/Providers";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/dashboard" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
