import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-bg text-text-primary">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            {/* Add Logo Here */}
            <h1 className="text-2xl font-bold text-primary">Outless</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-border"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-lg bg-primary text-white"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-active text-primary px-4 py-2 rounded-full text-sm">
              Smart Inventory Management
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              Manage Stock, Products &
              <span className="text-primary"> Business Operations</span>
              from One Place
            </h1>

            <p className="mt-6 text-lg text-text-secondary">
              Outless helps shops, warehouses and businesses track inventory,
              monitor stock movement, manage suppliers and gain valuable
              insights through analytics.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/signup"
                className="bg-primary text-white px-8 py-4 rounded-xl"
              >
                Start Free
              </Link>

              <button className="border border-border px-8 py-4 rounded-xl">
                Watch Demo
              </button>
            </div>
          </div>

          <div>
            {/* Replace with Dashboard Screenshot */}
            <div className="bg-white rounded-3xl shadow-card p-4">
              <img
                src="/dashboard-preview.png"
                alt="Dashboard"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            "10K+ Products",
            "500+ Businesses",
            "99.9% Uptime",
            "24/7 Monitoring",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-6 text-center shadow-soft"
            >
              <h3 className="font-bold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Everything You Need To Manage Inventory
          </h2>

          <p className="text-text-secondary mt-4">
            Powerful tools designed for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Inventory Tracking",
            "Stock Alerts",
            "Analytics Dashboard",
            "Purchase Management",
            "Supplier Records",
            "Multi Store Support",
          ].map((feature) => (
            <div key={feature} className="bg-white rounded-3xl p-8 shadow-soft">
              {/* Add Feature Icon */}
              <div className="w-12 h-12 rounded-xl bg-active mb-5" />

              <h3 className="text-xl font-semibold">{feature}</h3>

              <p className="text-text-secondary mt-3">
                Manage and monitor operations efficiently with real-time data.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Replace with actual dashboard image */}
            <img
              src="/dashboard-preview.png"
              alt="Dashboard"
              className="rounded-3xl shadow-card"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold">One Dashboard For Everything</h2>

            <p className="mt-5 text-text-secondary">
              Track inventory, monitor stock levels, manage suppliers and
              generate reports without switching between multiple systems.
            </p>

            <div className="space-y-4 mt-8">
              {[
                "Real-time Inventory Tracking",
                "Low Stock Notifications",
                "Advanced Reporting",
                "Product Management",
                "Business Analytics",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Simple Pricing</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-5xl font-bold mt-5">₹0</p>
            <ul className="mt-8 space-y-3">
              <li>100 Products</li>
              <li>Basic Reports</li>
              <li>Single User</li>
            </ul>
          </div>

          <div className="bg-primary text-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold">Growth</h3>
            <p className="text-5xl font-bold mt-5">₹999</p>
            <ul className="mt-8 space-y-3">
              <li>Unlimited Products</li>
              <li>Advanced Reports</li>
              <li>5 Users</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-5xl font-bold mt-5">Custom</p>
            <ul className="mt-8 space-y-3">
              <li>Unlimited Everything</li>
              <li>Priority Support</li>
              <li>Custom Integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-[32px] p-12 text-white text-center">
          <h2 className="text-4xl font-bold">
            Ready To Transform Inventory Management?
          </h2>

          <p className="mt-4 text-white/80">
            Join businesses using Outless to manage stock smarter.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-xl font-semibold"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-primary">Outless</h2>

          <p className="mt-3 text-text-secondary">
            Smart inventory management for modern businesses.
          </p>

          <div className="mt-8 text-sm text-text-secondary">
            © 2026 Outless. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
