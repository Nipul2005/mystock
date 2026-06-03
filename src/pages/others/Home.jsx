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
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Graphic Design",
      provider: "Creative Studio",
      price: "₹5,000",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
    {
      id: 3,
      title: "Video Editing",
      provider: "Vision Media",
      price: "₹8,000",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    },
    {
      id: 4,
      title: "SEO Services",
      provider: "Growth Agency",
      price: "₹12,000",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
  ];

  const categories = [
    {
      name: "Web Development",
      icon: "ri-code-s-slash-line",
    },
    {
      name: "Graphic Design",
      icon: "ri-palette-line",
    },
    {
      name: "Marketing",
      icon: "ri-megaphone-line",
    },
    {
      name: "Video Editing",
      icon: "ri-video-line",
    },
    {
      name: "Photography",
      icon: "ri-camera-line",
    },
    {
      name: "Consulting",
      icon: "ri-briefcase-line",
    },
  ];

  return (
    <main className="min-h-dvh bg-bg">
      {/* NAVBAR */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between">
          <Link to="/">
            <img
              src="/bizsphere_logo.png"
              alt="BizSphere"
              className="h-10 object-contain"
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

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-5 pt-8">
        <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-primary to-blue-600 px-6 md:px-14 py-16 md:py-24 text-white">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Trusted Service Marketplace
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Find Trusted
              <br />
              Service Providers
            </h1>

            <p className="mt-5 text-white/80 text-lg">
              Discover verified professionals, compare services and connect
              directly with providers through BizSphere.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-3 max-w-2xl">
              <input
                type="text"
                placeholder="Search services..."
                className="flex-1 px-5 py-4 rounded-2xl bg-white text-black outline-none"
              />

              <button className="px-8 py-4 rounded-2xl bg-black text-white font-medium">
                Search
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <i className="ri-service-line text-[320px] text-white/10"></i>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-5 -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["12K+", "Services"],
            ["2K+", "Providers"],
            ["50K+", "Requests"],
            ["4.9★", "Rating"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-3xl border border-border p-6 shadow-soft"
            >
              <h3 className="text-4xl font-bold text-primary">{value}</h3>

              <p className="mt-2 text-text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="mb-12">
          <p className="text-primary font-medium">Explore</p>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Popular Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-3xl border border-border p-6 hover:border-primary transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <i
                  className={`${category.icon} text-primary text-2xl`}
                ></i>
              </div>

              <h3 className="mt-5 font-semibold text-text-primary">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-primary font-medium">Marketplace</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Services
            </h2>
          </div>

          <Link
            to="/services"
            className="hidden md:flex text-primary font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-[30px] border border-border overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{service.title}</h3>

                    <p className="text-text-secondary">
                      {service.provider}
                    </p>
                  </div>

                  <span className="text-amber-500 font-medium">
                    ⭐ {service.rating}
                  </span>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>

                  <Link
                    to={`/service/${service.id}`}
                    className="px-4 py-2 rounded-xl bg-primary text-white"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROVIDERS */}

      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="mb-12 text-center">
          <p className="text-primary font-medium">Professionals</p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Top Providers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl border border-border p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">
                T
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Turtlabs
              </h3>

              <p className="text-text-secondary">
                24 Active Services
              </p>

              <div className="mt-3 text-amber-500">
                ⭐ 4.9
              </div>

              <button className="mt-6 w-full py-3 rounded-2xl border border-border hover:bg-hover transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="rounded-[40px] bg-linear-to-r from-primary to-blue-600 p-10 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            Join thousands of providers already receiving customer inquiries
            through BizSphere.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-8 px-8 py-4 rounded-2xl bg-white text-primary font-semibold"
          >
            Become Provider
          </Link>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-5 py-12">
          <img
            src="/bizsphere_logo.png"
            alt="BizSphere"
            className="h-10 object-contain"
          />

          <p className="mt-4 text-text-secondary max-w-md">
            BizSphere connects customers with trusted service providers and
            helps businesses grow through a modern digital marketplace.
          </p>

          <div className="mt-8 text-sm text-text-secondary">
            © 2026 BizSphere. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}