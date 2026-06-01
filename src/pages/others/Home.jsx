import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Website Development",
      provider: "Turtlabs",
      price: "₹15,000",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Graphic Design",
      provider: "Creative Studio",
      price: "₹5,000",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
    {
      id: 3,
      title: "Video Editing",
      provider: "Vision Media",
      price: "₹8,000",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    },
    {
      id: 4,
      title: "SEO Services",
      provider: "Growth Agency",
      price: "₹12,000",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
  ];

  const categories = [
    "Web Dev",
    "Design",
    "Marketing",
    "Video",
    "Photo",
    "Consulting",
  ];

  return (
    <main className="min-h-dvh bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-indigo-600">
            <img
              src="/bizsphere_icon.png"
              alt="BizSphere"
              className="w-14 h-14  object-contain"
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex gap-6 text-sm text-gray-600">
            <Link className="hover:text-black" to="/services">
              Services
            </Link>
            <Link className="hover:text-black" to="/providers">
              Providers
            </Link>
            <Link className="hover:text-black" to="/categories">
              Categories
            </Link>
          </nav>

          <div className="hidden lg:flex gap-3">
            <Link className="px-4 py-2 text-sm border rounded-xl" to="/login">
              Login
            </Link>
            <Link
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl"
              to="/signup"
            >
              Become Provider
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t bg-white px-4 py-3 space-y-3 text-sm">
            <Link to="/services">Services</Link>
            <Link to="/providers">Providers</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/login">Login</Link>
            <Link
              className="block bg-indigo-600 text-white text-center py-2 rounded-xl"
              to="/signup"
            >
              Become Provider
            </Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find trusted services <br /> in seconds
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Connect with verified professionals for development, design,
            marketing and more.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              className="flex-1 px-4 py-3 rounded-xl border bg-white"
              placeholder="Search services..."
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl">
              Search
            </button>
          </div>

          {/* quick stats */}
          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
            <p>10k+ Services</p>
            <p>2k+ Providers</p>
            <p>4.8 avg rating</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-semibold mb-6">Popular Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((c) => (
            <div
              key={c}
              className="bg-white border rounded-xl py-4 text-center text-sm hover:shadow-md transition"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Featured Services</h2>
          <Link className="text-indigo-600 text-sm" to="/services">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition"
            >
              <img
                src={s.image}
                alt={s.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.provider}</p>

                <div className="flex justify-between mt-3 text-sm">
                  <span className="font-semibold text-indigo-600">
                    {s.price}
                  </span>
                  <span>⭐ {s.rating}</span>
                </div>

                <Link
                  to={`/service/${s.id}`}
                  className="block mt-4 text-center text-sm bg-gray-900 text-white py-2 rounded-xl"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-indigo-600 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold">Start earning today</h2>
          <p className="mt-2 text-white/80">
            List your service and get discovered by customers.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-6 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold"
          >
            Become Provider
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-gray-500">
          <img
            src="/bizsphere_icon.png"
            alt="BizSphere"
            className="w-14 h-14 object-contain"
          />
          <p className="mt-2">
            Connecting people with trusted service providers.
          </p>
        </div>
      </footer>
    </main>
  );
}
