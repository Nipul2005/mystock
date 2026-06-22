import { Link } from "react-router-dom";
import HomePageHeader from "../../../components/HomePage/HomePageHeader";
import HomePageFooter from "../../../components/HomePage/HomePageFooter";
import Cta from "../../../components/Common/Cta.jsx";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Website Development",
      provider: "Turtlabs",
      rating: "4.9",
      price: "₹15,000",
    },
    {
      id: 2,
      title: "Graphic Design",
      provider: "Pixel Studio",
      rating: "4.8",
      price: "₹5,000",
    },
    {
      id: 3,
      title: "SEO Optimization",
      provider: "Growthify",
      rating: "4.9",
      price: "₹8,500",
    },
    {
      id: 4,
      title: "Video Editing",
      provider: "Vision Media",
      rating: "4.7",
      price: "₹7,500",
    },
    {
      id: 5,
      title: "Mobile App Development",
      provider: "CodeCraft",
      rating: "5.0",
      price: "₹25,000",
    },
    {
      id: 6,
      title: "Photography",
      provider: "Lens Studio",
      rating: "4.8",
      price: "₹4,500",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Design",
    "Marketing",
    "Video",
    "Photography",
    "Consulting",
  ];

  return (
    <main className="min-h-dvh bg-bg">
      <HomePageHeader />
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-blue-600 px-6 md:px-14 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Find Services
            </span>

            <h1 className="mt-3 text-4xl md:text-6xl font-bold">
              Discover Trusted Service Providers
            </h1>

            <p className="mt-5 text-lg">
              Browse verified professionals for development, design, marketing,
              consulting and more.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white outline-none text-primary placeholder:text-text-secondary"
                />
              </div>

              <button className="px-8 py-4 bg-white text-text-primary rounded-2xl font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="absolute md:right-10 -right-20 top-1/2 -translate-y-1/2">
          <i className="ri-service-bell-line text-[320px] text-white/20"></i>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className="shrink-0 px-5 py-3 rounded-2xl bg-white border border-border hover:border-primary hover:text-primary transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* FILTERS */}
          <aside className="bg-white rounded-3xl border border-border p-6 h-fit">
            <h3 className="font-semibold text-lg mb-6">Filters</h3>

            <div className="space-y-8">
              <div>
                <h4 className="font-medium mb-3">Category</h4>

                <div className="space-y-3">
                  {categories.slice(1).map((item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input type="checkbox" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Rating</h4>

                <div className="space-y-3">
                  <label className="flex gap-2">
                    <input type="radio" name="rating" />
                    ⭐⭐⭐⭐⭐
                  </label>

                  <label className="flex gap-2">
                    <input type="radio" name="rating" />
                    ⭐⭐⭐⭐+
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Budget</h4>

                <select className="w-full border border-border rounded-xl p-3">
                  <option>Any Budget</option>
                  <option>₹0 - ₹5,000</option>
                  <option>₹5,000 - ₹15,000</option>
                  <option>₹15,000+</option>
                </select>
              </div>
            </div>
          </aside>

          {/* SERVICES */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-text-primary">
                124 Services Found
              </h2>

              <select className="border border-border rounded-xl px-4 py-3 bg-white">
                <option>Highest Rated</option>
                <option>Newest</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="bg-white border border-border rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <i className="ri-briefcase-line text-primary text-2xl"></i>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-text-secondary">{service.provider}</p>

                  <div className="mt-5 flex justify-between items-center">
                    <span className="font-medium">⭐ {service.rating}</span>

                    <span className="font-bold text-primary">
                      {service.price}
                    </span>
                  </div>

                  <Link
                    to={`/service/${service.id}`}
                    className="mt-6 flex justify-center items-center py-3 rounded-2xl bg-primary text-white font-medium"
                  >
                    View Service
                  </Link>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center mt-12 gap-3">
              <button className="w-11 h-11 rounded-xl border border-border bg-white">
                1
              </button>

              <button className="w-11 h-11 rounded-xl border border-border bg-white">
                2
              </button>

              <button className="w-11 h-11 rounded-xl border border-border bg-white">
                3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <Cta
        heading={"Offer Your Services On BizSphere"}
        icon={"user-star-fill"}
        text={
          "Join thousands of providers and start receiving inquiries from customers looking for your expertise."
        }
      />
      <HomePageFooter />
    </main>
  );
}
