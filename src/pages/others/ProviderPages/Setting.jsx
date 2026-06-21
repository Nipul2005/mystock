import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../../store/reducers/user";
import toast from "react-hot-toast";
import { logOut } from "../../../store/reducers/auth";
import Profile from "../../../components/setting/Profile";
import Business from "../../../components/setting/Business";
import Security from "../../../components/setting/Security";
import Notification from "../../../components/setting/Notification";
import Logout from "../../../components/setting/Logout";
import Delete from "../../../components/setting/Delete";

export default function Settings() {
  
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

      <div className="p-4 space-y-8">
        {/* PROFILE */}
        <Profile/>

        {/* BUSINESS */}
        <Business/>

        {/* SECURITY */}
        <Security/>

        {/* NOTIFICATIONS */}
        <Notification/>

        {/* DANGER ZONE */}
        <Logout/>

        {/* Danger Zone */}
        <Delete/>
      </div>
    </main>
  );
}
