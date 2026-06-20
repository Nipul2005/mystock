import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../Common/Loading";

function AuthGuard({ children }) {
   const { loading, isAuthenticated } = useSelector((state) => state.auth);

   if (loading) {
     return <Loading />;
   }

   if (!isAuthenticated) {
     return <Navigate to="/login" replace />;
   }

   return children;
}

export default AuthGuard;
