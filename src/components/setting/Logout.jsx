import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../../store/reducers/user';
import toast from 'react-hot-toast';
import { logOut } from '../../store/reducers/auth';

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutUser, { isLoading }] = useLogoutUserMutation();

    const handleLogout = async () => {
      try {
        await logoutUser().unwrap();

        dispatch(logOut());

        toast.success("Logged out successfully");

        navigate("/", { replace: true });
      } catch (error) {
        toast.error(error?.data?.message || "Something went wrong");
      }
    };
  return (
    <section className="bg-white border border-border rounded-3xl p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
            <i className="ri-logout-box-r-line text-2xl text-orange-500"></i>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Logout Session
            </h2>

            <p className="text-text-secondary mt-1">
              Sign out of your account on this device. You can sign back in at
              any time.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>

              <span className="text-sm text-text-secondary">
                Currently signed in on this device
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="px-8 py-3 rounded-2xl cursor-pointer bg-accent hover:bg-accent/50 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition flex items-center justify-center gap-2"
        >
          <i className="ri-logout-box-r-line"></i>

          {isLoading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </section>
  );
}

export default Logout