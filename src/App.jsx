import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/others/ConsumerPages/Home";
import Layout from "./pages/others/ProviderPages/Layout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Services from "./pages/others/ConsumerPages/Service";
import Categories from "./pages/others/ConsumerPages/Category";
import Providers from "./pages/others/ConsumerPages/Providers";
import AuthGuard from "./components/auth/AuthGuard";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route
        path="/"
        element={
          <AuthGuard>
            <Home />
          </AuthGuard>
        }
      />
      <Route path="/services" element={<Services />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/providers" element={<Providers />} />

      {/* Guest Only */}
      <Route
        path="/login"
        element={
          // <GuestGuard>
          <Login />
          // </GuestGuard>
        }
      />

      <Route
        path="/signup"
        element={
          // <GuestGuard>
          <SignUp />
          // </GuestGuard>
        }
      />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          // <AuthGuard>
          <Layout />
          // </AuthGuard>
        }
      />
    </Routes>
  );
}

export default App;
