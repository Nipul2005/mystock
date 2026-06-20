import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../../store/reducers/user";
import toast from "react-hot-toast";
import { logOut } from "../../../store/reducers/auth";

export default function Settings() {
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
    <main className="w-full min-h-full bg-bg">
      {/* HEADER */}
      <section className="bg-white border-b border-border">
        <div className="px-8 py-8">
          <p className="text-primary font-medium">Account Settings</p>

          <h1 className="text-4xl font-bold text-text-primary mt-1">
            Settings
          </h1>

          <p className="text-text-secondary mt-2">
            Manage your profile, business information and account preferences.
          </p>
        </div>
      </section>

      <div className="p-8 space-y-8">
        {/* PROFILE */}
        <section className="bg-white border border-border rounded-3xl p-8">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
              <i className="ri-user-3-line text-4xl text-primary"></i>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Profile Information
              </h2>

              <p className="text-text-secondary">
                Update your personal details.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>

              <input
                type="text"
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Location</label>

              <input
                type="text"
                placeholder="New Delhi"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>
          </div>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-2xl font-medium">
            Save Changes
          </button>
        </section>

        {/* BUSINESS */}
        <section className="bg-white border border-border rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <i className="ri-store-2-line text-2xl text-primary"></i>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Business Information</h2>

              <p className="text-text-secondary">
                Information visible to customers.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Business Name</label>

              <input
                type="text"
                placeholder="Turtlabs"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Business Description
              </label>

              <textarea
                rows={4}
                placeholder="Tell customers about your business..."
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 font-medium">Website</label>

              <input
                type="url"
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>
          </div>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-2xl font-medium">
            Update Business
          </button>
        </section>

        {/* SECURITY */}
        <section className="bg-white border border-border rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
              <i className="ri-lock-password-line text-2xl text-red-500"></i>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Security</h2>

              <p className="text-text-secondary">
                Manage password and account security.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none"
            />
          </div>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-2xl font-medium">
            Change Password
          </button>
        </section>

        {/* NOTIFICATIONS */}
        <section className="bg-white border border-border rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
              <i className="ri-notification-3-line text-2xl text-amber-500"></i>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Notifications</h2>

              <p className="text-text-secondary">
                Choose what updates you want to receive.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <label className="flex justify-between items-center">
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center">
              <span>Service Requests</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center">
              <span>Marketing Emails</span>
              <input type="checkbox" />
            </label>
          </div>
        </section>

        {/* DANGER ZONE */}
        <section className="bg-white border border-border rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <i className="ri-logout-box-r-line text-2xl text-orange-500"></i>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary">
                  Logout Session
                </h2>

                <p className="text-text-secondary">
                  Sign out of your account on this device.
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="px-6 py-3 rounded-2xl cursor-pointer bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-medium transition"
            >
              {isLoading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-white border border-red-200 rounded-3xl p-8 mt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                <i className="ri-delete-bin-line text-2xl text-red-500"></i>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-red-500">Danger Zone</h2>

                <p className="text-text-secondary">
                  Permanently delete your account and all associated data.
                </p>
              </div>
            </div>

            <button className="px-6 py-3 cursor-pointer rounded-2xl bg-red-500 hover:bg-red-600 text-white font-medium transition">
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
