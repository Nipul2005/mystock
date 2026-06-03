
function ServicesOverview() {
  const services = [
    {
      name: "Website Development",
      requests: 24,
      price: "₹15,000",
      status: "Active",
      icon: "ri-code-s-slash-line",
    },
    {
      name: "SEO Optimization",
      requests: 12,
      price: "₹8,500",
      status: "Pending",
      icon: "ri-line-chart-line",
    },
    {
      name: "Graphic Design",
      requests: 18,
      price: "₹5,000",
      status: "Active",
      icon: "ri-palette-line",
    },
    {
      name: "Video Editing",
      requests: 4,
      price: "₹7,500",
      status: "Inactive",
      icon: "ri-video-line",
    },
  ];

  return (
    <section className="bg-white border-y border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm font-semibold text-primary">
            Service Management
          </p>

          <h2 className="text-3xl font-bold text-text-primary mt-1">
            My Services
          </h2>

          <p className="text-text-secondary mt-2">
            Manage and monitor all active services offered by your business.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-primary text-white font-medium">
          Add Service
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {services.map((service) => (
          <div
            key={service.name}
            className="
              border
              border-border
              rounded-3xl
              p-5
              hover:shadow-lg
              transition-all
            "
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <i className={`${service.icon} text-xl text-primary`}></i>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  service.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : service.status === "Pending"
                      ? "bg-amber-100 text-amber-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {service.status}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-text-primary">
              {service.name}
            </h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-text-secondary text-sm">
                Starting Price
              </span>

              <span className="font-semibold text-text-primary">
                {service.price}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-text-secondary text-sm">Requests</span>

              <span className="font-medium">{service.requests}</span>
            </div>

            <button className="w-full mt-6 py-3 rounded-2xl border border-border hover:bg-bg transition">
              Manage Service
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesOverview;
