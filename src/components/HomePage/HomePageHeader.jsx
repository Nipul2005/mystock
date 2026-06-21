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
    <header className="fixed w-full top-0 z-50 px-4 lg:px-6 pt-4">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-lg shadow-slate-200/50">
        <div className="flex items-center justify-between px-5 lg:px-8 py-3">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/bizsphere_icon.png"
                alt="BizSphere"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <h2 className="font-bold text-2xl text-text-primary">
                BizSphere
              </h2>

              <p className="text-xs text-text-muted">
                Trusted Service Marketplace
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-3">
            {navbar.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `px-5 py-3 rounded-2xl font-medium transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-text-primary hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}

          <div className="hidden lg:flex items-center gap-3">
            <button className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center hover:bg-slate-50 transition relative">
              <i className="ri-notification-3-line text-lg"></i>

              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <Link
              to="/login"
              className="px-6 py-3 rounded-2xl border border-border font-medium hover:bg-slate-50 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-7 py-3 rounded-2xl bg-primary text-white font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Become Provider
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 rounded-2xl border border-border flex items-center justify-center"
          >
            <i
              className={`text-xl ${
                menuOpen ? "ri-close-line" : "ri-menu-line"
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-125 border-t border-border" : "max-h-0"
          }`}
        >
          <div className="p-5 bg-white">
            <div className="flex flex-col gap-2">
              {navbar.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-border">
              <Link
                to="/login"
                className="w-full py-3 text-center rounded-xl border border-border font-medium"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="w-full py-3 text-center rounded-xl bg-primary text-white font-medium"
              >
                Become Provider
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomePageHeader