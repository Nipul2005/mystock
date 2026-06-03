import { useState } from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../../components/HomePage/HomePageHeader";
import HomePageFooter from "../../../components/HomePage/HomePageFooter";
import Cta from "../../../components/Common/Cta";

export default function Home() {


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

      <HomePageHeader/>
      {/* HERO */}

      <section className="max-w-full mx-auto">
        <div className="relative overflow-hidden bg-linear-to-br from-primary to-blue-600 px-6 md:px-14 py-16 md:py-24 text-white">
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

              <button className="px-8 py-4 rounded-2xl bg-white text-text-primary font-medium">
                Search
              </button>
            </div>
          </div>

          <div className="absolute md:right-10 -right-20 top-1/2 -translate-y-1/2">
            <i className="ri-service-line text-[320px] text-white/20"></i>
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

      

      {/* CTA */}
      <Cta
        heading="Ready To Grow Your Business?"
        text="Join thousands of providers already receiving customer inquiries through BizSphere."
        icon="verified-badge-line"
      />

      {/* FOOTER */}

      <HomePageFooter />
    </main>
  );
}