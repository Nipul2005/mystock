import Icons from "../Common/Icons";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-border">
      <div className="h-20 px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl hover:bg-bg transition p-2">
            <i className="ri-menu-2-line text-xl"></i>
          </button>

        </div>

        {/* Search */}
        <div className="flex-1 max-w-3xl">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

            <input
              type="text"
              placeholder="Search services, requests, customers..."
              className="
            w-full
            h-12
            pl-12
            pr-4
            rounded-2xl
            border
            border-border
            bg-bg
            outline-none
            focus:border-primary
          "
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="relative w-11 h-11 rounded-xl border border-border hover:bg-bg transition">
            <i className="ri-message-2-line"></i>
          </button>

          <button className="relative w-11 h-11 rounded-xl border border-border hover:bg-bg transition">
            <i className="ri-notification-3-line"></i>

            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <div className="w-px h-8 bg-border hidden md:block"></div>

          <button className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white font-semibold">
              JD
            </div>

            <div className="hidden lg:block text-left">
              <p className="font-semibold text-sm text-text-primary">
                John Doe
              </p>

              <p className="text-xs text-text-secondary">Business Owner</p>
            </div>

            <i className="ri-arrow-down-s-line text-text-secondary"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
