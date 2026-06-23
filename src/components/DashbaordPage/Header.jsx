import Icons from "../Common/Icons";
import { useSelector } from "react-redux";
import Profile from "../Common/Profile";

function Header() {
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-primary/10 py-1">
      <div className="h-16 px-4 lg:px-6 flex items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl hover:bg-slate-100 transition flex items-center justify-center">
            <i className="ri-menu-2-line text-xl"></i>
          </button>
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-2xl">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

            <input
              type="text"
              placeholder="Search services, customers..."
              className="w-full h-11 pl-11 pr-16 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary outline-none transition"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Messages */}
          <button className="relative w-10 h-10 rounded-xl hover:bg-slate-100 transition flex items-center justify-center">
            <i className="ri-message-2-line text-lg"></i>
          </button>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-xl hover:bg-slate-100 transition flex items-center justify-center">
            <i className="ri-notification-3-line text-lg"></i>

            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <div className="w-px h-7 bg-slate-200 mx-1"></div>

          {/* Profile */}
          <Profile/>
        </div>
      </div>
    </header>
  );
}

export default Header;
