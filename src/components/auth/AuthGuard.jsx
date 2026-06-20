import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../Common/Loading";

function AuthGuard({ children }) {
  const { isAuthenticated } = useSelector((state) => state.CurrentUser);

  if (!isAuthenticated) return <Loading />;
  return children;
}

export default AuthGuard;
