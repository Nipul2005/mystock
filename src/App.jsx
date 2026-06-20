import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/others/ConsumerPages/Home";
import Layout from "./pages/others/ProviderPages/Layout";
import Login from "./pages/authpages/Login.jsx";
import SignUp from "./pages/authpages/SignUp.jsx";
import Services from "./pages/others/ConsumerPages/Service";
import Categories from "./pages/others/ConsumerPages/Category";
import Providers from "./pages/others/ConsumerPages/Providers";
import AuthGuard from "./components/auth/AuthGuard";
import { useGetCurrentUserQuery } from "./store/reducers/user.js";
import { setCredentials, finishLoading } from "./store/reducers/auth.js";
import { useEffect } from "react";
import GuestGuard from "./components/auth/GuestGuard.jsx";

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
      {/* Public */}
      <Route
        path=""
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

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      />
    </Routes>
  );
}

export default App;
