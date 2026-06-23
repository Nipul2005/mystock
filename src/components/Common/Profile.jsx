import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
    const { user } = useSelector((state) => state.auth);
  return (
    <Link
      to={`/profile/${user.userName}`}
      className="flex items-center gap-3 cursor-pointer lg:p-2 p-0 rounded-xl hover:bg-primary/20"
    >
      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold">
        {user.name[0]}
      </div>

      <div className="hidden lg:block">
        <h4 className="font-semibold text-sm text-text-primary">{user.name}</h4>

        <p className="text-xs text-text-secondary">Business Owner</p>
      </div>
    </Link>
  );
}

export default Profile;
