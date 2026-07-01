import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function GuestGuard({ children }) {
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  if (loading) {
    return children;
  }

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default GuestGuard;
