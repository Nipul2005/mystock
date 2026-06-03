import { Link } from "react-router-dom";
import Cta from "../../../components/Common/Cta";
import HomePageFooter from "../../../components/HomePage/HomePageFooter";
import HomePageHeader from "../../../components/HomePage/HomePageHeader";

export default function Categories() {
  const categories = [
    {
      name: "Web Development",
      icon: "ri-code-s-slash-line",
      services: "248 Services",
    },
    {
      name: "Graphic Design",
      icon: "ri-palette-line",
      services: "156 Services",
    },
    {
      name: "Digital Marketing",
      icon: "ri-megaphone-line",
      services: "182 Services",
    },
    {
      name: "Video Editing",
      icon: "ri-video-line",
      services: "94 Services",
    },
    {
      name: "Photography",
      icon: "ri-camera-line",
      services: "78 Services",
    },
    {
      name: "Business Consulting",
      icon: "ri-briefcase-line",
      services: "62 Services",
    },
    {
      name: "Mobile Apps",
      icon: "ri-smartphone-line",
      services: "118 Services",
    },
    {
      name: "Content Writing",
      icon: "ri-quill-pen-line",
      services: "87 Services",
    },
  ];

  return (
    <main className="min-h-dvh bg-bg">
        <HomePageHeader />
      {/* HERO */}
      <section className="w-full text-white relative bg-linear-to-br from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-5 py-20 text-center">
          <span className="font-medium">Explore Categories</span>

          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Browse Services By Category
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg">
            Discover trusted providers across development, design, marketing,
            consulting and many more professional service categories.
          </p>
        </div>

        <div className="absolute md:right-10 -right-30 top-1/2 -translate-y-1/2">
          <i className="ri-menu-search-line text-[320px] text-white/20"></i>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary text-white rounded-4xl p-8">
            <i className="ri-code-s-slash-line text-5xl"></i>

            <h3 className="mt-6 text-2xl font-bold">Web Development</h3>

            <p className="mt-2 text-white/80">
              Build websites, SaaS products and custom web applications.
            </p>
          </div>

          <div className="bg-white rounded-4xl border border-border p-8">
            <i className="ri-palette-line text-5xl text-primary"></i>

            <h3 className="mt-6 text-2xl font-bold">Graphic Design</h3>

            <p className="mt-2 text-text-secondary">
              Logos, branding, UI design and creative assets.
            </p>
          </div>

          <div className="bg-white rounded-4xl border border-border p-8">
            <i className="ri-megaphone-line text-5xl text-primary"></i>

            <h3 className="mt-6 text-2xl font-bold">Marketing</h3>

            <p className="mt-2 text-text-secondary">
              SEO, social media and growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* ALL CATEGORIES */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">All Categories</h2>

          <span className="text-text-secondary">
            {categories.length} Categories
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/services"
              className="
                bg-white
                border
                border-border
                rounded-[28px]
                p-6
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <i className={`${category.icon} text-2xl text-primary`}></i>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-text-primary">
                {category.name}
              </h3>

              <p className="mt-2 text-text-secondary">{category.services}</p>

              <div className="mt-5 flex items-center gap-2 text-primary font-medium">
                Explore
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}

      <Cta
        heading={"Have A Skill To Offer?"}
        text={
          "Join BizSphere and connect with customers looking for your expertise."
        }
        icon={"user-settings-line"}
      />
      <HomePageFooter />
    </main>
  );
}
