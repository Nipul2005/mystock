import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomePageHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbar=[
      {
        name:"Home",
        link:"/"
      },
      {
        name:"Services",
        link:"/services"
      },
      {
        name:"Categories",
        link:"/categories"
      },
      {
        name:"Providers",
        link:"/providers"
      }
    ]
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto h-auto">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl rounded-md px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/bizsphere_icon.png"
                alt="BizSphere"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="font-bold text-xl text-slate-900">BizSphere</h1>

              <p className="text-xs text-slate-500">Service Marketplace</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 rounded-xl">
            {navbar.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-white shadow text-primary"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <button className="relative w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 transition">
              <i className="ri-notification-3-line text-lg"></i>

              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button> */}

            <Link
              to="/login"
              className="px-5 py-2.5 font-medium hover:text-primary transition bg-white shadow text-primary rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              Become Provider
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-slate-100"
          >
            <i
              className={`text-xl ${
                menuOpen ? "ri-close-line" : "ri-menu-line"
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden mt-3 bg-white border border-slate-200 rounded-2xl shadow-xl p-5">
            <div className="flex flex-col gap-2">
              {navbar.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-5 pt-5 border-t">
              <Link to="/login" className="py-3 border rounded-xl text-center">
                Login
              </Link>

              <Link
                to="/signup"
                className="py-3 bg-primary text-white rounded-xl text-center"
              >
                Become Provider
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HomePageHeader