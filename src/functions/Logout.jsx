import { useNavigate } from "react-router-dom";
import { logOut } from "../store/reducers/auth.js";
import { useLogoutUserMutation } from "../store/reducers/user";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUser, { isLoading }] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      const response = await logoutUser().unwrap();

      dispatch(logOut());

      toast.success(response?.message || "Logged out successfully");

      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full py-2 transition"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}

export default Logout;
