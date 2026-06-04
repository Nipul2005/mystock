import { useState } from 'react'
import { Link } from 'react-router-dom';
import NavStyle from '../Common/NavStyle';

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/bizsphere_icon.png"
            alt="BizSphere"
            className="h-15 object-contain"
          />

          <div className="hidden sm:block">
            <h2 className="font-bold text-xl text-text-primary">BizSphere</h2>

            <p className="text-xs text-text-muted">Service Marketplace</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navbar.map((item, index) => (
            <NavStyle key={index} link={item.link} name={item.name}/>
            
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-3 rounded-2xl border border-border hover:bg-hover transition font-medium"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:scale-105 transition"
          >
            Become Provider
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-11 h-11 rounded-xl border border-border flex items-center justify-center"
        >
          <i
            className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-5">
          <div className="flex flex-col gap-2">
            <Link
              to="/services"
              className="px-4 py-3 rounded-xl hover:bg-hover"
            >
              Services
            </Link>

            <Link
              to="/providers"
              className="px-4 py-3 rounded-xl hover:bg-hover"
            >
              Providers
            </Link>

            <Link
              to="/categories"
              className="px-4 py-3 rounded-xl hover:bg-hover"
            >
              Categories
            </Link>
          </div>

          <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-border">
            <Link
              to="/login"
              className="w-full text-center py-3 rounded-xl border border-border font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="w-full text-center py-3 rounded-xl bg-primary text-white font-medium"
            >
              Become Provider
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomePageHeader