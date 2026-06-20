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
      await logoutUser().unwrap();
      dispatch(logOut());
      navigate("/", { replace: true });
      return toast.success("Logout succesfully");
    } catch (error) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-400 text-white rounded-full py-2 cursor-pointer z-20"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}

export default Logout;
