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
    "Web Development",
    "Graphic Design",
    "Marketing",
    "Video Editing",
    "Photography",
    "Consulting",
  ];

  return (
    <main className="min-h-dvh bg-bg">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 h-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Outless
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/dashboard">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/providers">Providers</Link>
            <Link to="/categories">Categories</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 border border-border rounded-xl"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 bg-primary text-white rounded-xl"
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

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="flex flex-col p-4 gap-4">
              <Link to="/">Home</Link>
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
      </nav>

      {/* HERO */}
      <section
        className="min-h-[calc(100dvh-64px)] flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/nature.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
            Discover Trusted Services
          </h1>

          <p className="mt-6 text-white/90 text-base sm:text-lg">
            Find professionals and businesses offering services tailored to your
            needs.
          </p>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search services..."
              className="flex-1 bg-white rounded-xl px-5 py-4 outline-none"
            />

            <button className="bg-primary text-white px-8 py-4 rounded-xl">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center">Popular Categories</h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-5 text-center shadow-soft hover:-translate-y-1 transition"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Services</h2>

          <Link to="/services" className="text-primary">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-soft"
            >
              {/* Replace with actual image */}
              <div className="h-52 bg-hover">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">{service.title}</h3>

                <p className="text-text-secondary mt-1">{service.provider}</p>

                <div className="mt-4 flex justify-between">
                  <span className="font-semibold text-primary">
                    {service.price}
                  </span>

                  <span>⭐ {service.rating}</span>
                </div>

                <Link
                  to={`/service/${service.id}`}
                  className="mt-5 block text-center bg-primary text-white py-3 rounded-xl"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Top Providers</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-border rounded-3xl p-6">
                <div className="w-16 h-16 rounded-full bg-hover" />

                <h3 className="mt-4 font-semibold">Provider Name</h3>

                <p className="text-text-secondary">24 Services</p>

                <p className="mt-2">⭐ 4.9</p>

                <button className="mt-4 text-primary">View Profile</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">For Buyers</h3>

            <div className="space-y-4">
              <p>1. Search Services</p>
              <p>2. View Details</p>
              <p>3. Send Request</p>
              <p>4. Get Contacted</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">For Providers</h3>

            <div className="space-y-4">
              <p>1. Create Account</p>
              <p>2. Add Services</p>
              <p>3. Receive Notifications</p>
              <p>4. Grow Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto rounded-4xl bg-linear-to-r from-primary to-secondary p-8 md:p-14 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">Own A Business?</h2>

          <p className="mt-4 text-white/90">
            List your services and receive customer inquiries.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-xl font-semibold"
          >
            Become Provider
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="font-bold text-2xl text-primary">Outless</h2>

          <p className="mt-2 text-text-secondary">
            Connecting buyers with trusted service providers.
          </p>
        </div>
      </footer>
    </main>
  );
}
