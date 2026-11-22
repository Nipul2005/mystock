import { Link } from "react-router-dom";
import HomePageHeader from "../../../components/HomePage/HomePageHeader.jsx";
import HomePageFooter from "../../../components/HomePage/HomePageFooter.jsx";
import Cta from "../../../components/Common/Cta.jsx";
import { useGetServicesQuery } from "../../../store/reducers/consumer.js";
import ServiceFilterAndContent from "../../../components/MainLandingServicePage/ServiceFilterAndContent.jsx";
import LoadingAnime from "../../../components/Common/LoadingAnime.jsx";

export default function Services() {
  const { data, isLoading } = useGetServicesQuery();

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

      {isLoading && (
        <div className="w-full flex jusitfy-center align-center pt-6">
          <LoadingAnime />
        </div>
      )}
      <ServiceFilterAndContent data={data} />

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
