import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// Main landing pages
import Home from "./pages/others/MainLandingPages/Home";
import Services from "./pages/others/MainLandingPages/Service";
import Categories from "./pages/others/MainLandingPages/Category";
import Providers from "./pages/others/MainLandingPages/Providers";
// Main landing pages ends

// Auth pages

import Login from "./pages/authpages/Login.jsx";
import SignUp from "./pages/authpages/SignUp.jsx";

// Auth pages end

import AuthGuard from "./components/auth/AuthGuard";
import { useGetCurrentUserQuery } from "./store/reducers/user.js";
import { setCredentials, finishLoading } from "./store/reducers/auth.js";
import { useEffect } from "react";
import GuestGuard from "./components/auth/GuestGuard.jsx";

// Provider Pages
import Layout from "./pages/others/ProviderPages/Layout";
import Manage from "./pages/others/ProviderPages/Manage.jsx";
import Create from "./pages/others/ProviderPages/Create.jsx";
import Settings from "./pages/others/ProviderPages/Setting.jsx";
// Provider Pages end

import DashboardBody from "./components/DashbaordPage/DashboardBody.jsx";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCurrentUserQuery();

  useEffect(() => {
    if (!isLoading) {
      if (data?.data) {
        dispatch(setCredentials(data.data));
      } else {
        dispatch(finishLoading());
      }
    }
  }, [data, isLoading, dispatch]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <GuestGuard>
            <Home />
          </GuestGuard>
        }
      />
      <Route
        path="/services"
        element={
          <GuestGuard>
            <Services />
          </GuestGuard>
        }
      />
      <Route
        path="/categories"
        element={
          <GuestGuard>
            <Categories />
          </GuestGuard>
        }
      />
      <Route
        path="/providers"
        element={
          <GuestGuard>
            <Providers />
          </GuestGuard>
        }
      />

      {/* Guest Only */}
      <Route
        path="/login"
        element={
          <GuestGuard>
            <Login />
          </GuestGuard>
        }
      />
      <Route
        path="/signup"
        element={
          <GuestGuard>
            <SignUp />
          </GuestGuard>
        }
      />

      {/* Dashboard */}
      <Route
        path="/home"
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route index element={<DashboardBody />} />
        <Route path="manage" element={<Manage />} />
        <Route path="create" element={<Create />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
