import { useState } from 'react'
import { Link } from 'react-router-dom';

function HomePageHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between">
          <Link to="/">
            <img
              src="/bizsphere_icon.png"
              alt="BizSphere"
              className="h-15 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/services"
              className="text-text-secondary hover:text-primary transition"
            >
              Services
            </Link>

            <Link
              to="/providers"
              className="text-text-secondary hover:text-primary transition"
            >
              Providers
            </Link>

            <Link
              to="/categories"
              className="text-text-secondary hover:text-primary transition"
            >
              Categories
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-3 rounded-2xl border border-border font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-3 rounded-2xl bg-primary text-white font-medium"
            >
              Become Provider
            </Link>
          </div>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="p-5 flex flex-col gap-4">
              <Link to="/services">Services</Link>
              <Link to="/providers">Providers</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/login">Login</Link>

              <Link
                to="/signup"
                className="bg-primary text-white text-center py-3 rounded-xl"
              >
                Become Provider
              </Link>
            </div>
          </div>
        )}
      </header>
  )
}

export default HomePageHeader