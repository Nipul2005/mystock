import { Link } from "react-router-dom";
import Cta from "../../../components/Common/Cta";
import HomePageFooter from "../../../components/HomePage/HomePageFooter";
import HomePageHeader from "../../../components/HomePage/HomePageHeader";

export default function Providers() {
  const providers = [
    {
      id: 1,
      name: "Turtlabs",
      category: "Web Development",
      rating: "4.9",
      services: 24,
      avatar: "T",
    },
    {
      id: 2,
      name: "Pixel Studio",
      category: "Graphic Design",
      rating: "4.8",
      services: 18,
      avatar: "P",
    },
    {
      id: 3,
      name: "Growthify",
      category: "Marketing",
      rating: "4.9",
      services: 31,
      avatar: "G",
    },
    {
      id: 4,
      name: "Vision Media",
      category: "Video Editing",
      rating: "4.7",
      services: 12,
      avatar: "V",
    },
    {
      id: 5,
      name: "CodeCraft",
      category: "Mobile Apps",
      rating: "5.0",
      services: 20,
      avatar: "C",
    },
    {
      id: 6,
      name: "Lens Studio",
      category: "Photography",
      rating: "4.8",
      services: 16,
      avatar: "L",
    },
  ];

  return (
    <main className="min-h-dvh bg-bg">
      <HomePageHeader />
      {/* HERO */}

      <section className="relative overflow-hidden bg-linear-to-br from-primary to-blue-600 px-6 md:px-14 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Trusted Professionals
          </span>

          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Discover Top Service Providers
          </h1>

          <p className="mt-5 text-lg max-w-2xl">
            Connect with experienced professionals and businesses ready to help
            you achieve your goals.
          </p>

          <div className="mt-8 max-w-xl relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

            <input
              type="text"
              placeholder="Search providers..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-text-primary bg-white outline-none placeholder:text-text-secondary"
            />
          </div>
        </div>
        <div className="absolute md:right-10 -right-20 top-1/2 -translate-y-1/2">
          <i className="ri-shopping-cart-line text-[320px] text-white/20"></i>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-4xl p-8">
            <h3 className="text-4xl font-bold text-primary">2,500+</h3>

            <p className="mt-2 text-text-secondary">Active Providers</p>
          </div>

          <div className="bg-white border border-border rounded-4xl p-8">
            <h3 className="text-4xl font-bold text-primary">10,000+</h3>

            <p className="mt-2 text-text-secondary">Services Listed</p>
          </div>

          <div className="bg-white border border-border rounded-4xl p-8">
            <h3 className="text-4xl font-bold text-primary">4.9★</h3>

            <p className="mt-2 text-text-secondary">Average Rating</p>
          </div>
        </div>
      </section>

      {/* PROVIDERS GRID */}

      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Providers</h2>

          <span className="text-text-secondary">
            {providers.length} Providers
          </span>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <article
              key={provider.id}
              className="
                bg-white
                border
                border-border
                rounded-4xl
                p-7
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {provider.avatar}
                </div>

                <div>
                  <h3 className="font-semibold text-xl">{provider.name}</h3>

                  <p className="text-text-secondary">{provider.category}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <div>
                  <p className="text-sm text-text-secondary">Rating</p>

                  <p className="font-semibold">⭐ {provider.rating}</p>
                </div>

                <div>
                  <p className="text-sm text-text-secondary">Services</p>

                  <p className="font-semibold">{provider.services}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to={`/provider/${provider.id}`}
                  className="flex-1 text-center py-3 rounded-2xl bg-primary text-white font-medium"
                >
                  View Profile
                </Link>

                <button className="w-12 h-12 rounded-2xl border border-border">
                  <i className="ri-message-3-line"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}

      <Cta
        heading={"Ready To Become A Provider?"}
        text={
          "Join BizSphere, showcase your expertise and receive inquiries from customers."
        }
        icon={"group-line"}
      />
      <HomePageFooter />
    </main>
  );
}
