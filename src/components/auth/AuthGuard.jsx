import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthGuard({ children }) {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  console.log(isAuthenticated, loading);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-bg">
        <img
          src="/bizsphere_icon.png"
          alt="BizSphere"
          className="w-16 h-16 object-contain mb-6"
        />

        <div className="w-10 h-10 rounded-full border-[3px] border-primary/20 border-t-primary animate-spin"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default AuthGuard;
