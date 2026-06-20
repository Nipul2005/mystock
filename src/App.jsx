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
import { setCredentials } from "./store/reducers/loggedUser.js";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data.data));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <Routes>
      {/* Public */}
      <Route path="" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/providers" element={<Providers />} />

      {/* Guest Only */}
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<SignUp />} />

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
