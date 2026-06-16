import { useGetCurrentUserQuery } from "../../store/reducers/user";
import { Navigate } from "react-router-dom";

function AuthGuard() {
  const { data, isLoading } = useGetCurrentUserQuery();

  console.log(data);

  if (isLoading) return null;

  if (data?.data) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AuthGuard;
