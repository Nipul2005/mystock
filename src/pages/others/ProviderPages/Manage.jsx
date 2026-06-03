import { Link } from "react-router-dom";

export default function Manage() {
  const services = [
    {
      id: 1,
      title: "Website Development",
      category: "Development",
      price: "₹15,000",
      requests: 24,
      status: "Active",
      icon: "code-s-slash-line",
    },
    {
      id: 2,
      title: "SEO Optimization",
      category: "Marketing",
      price: "₹8,500",
      requests: 12,
      status: "Pending",
      icon: "line-chart-line",
    },
    {
      id: 3,
      title: "Graphic Design",
      category: "Design",
      price: "₹5,000",
      requests: 18,
      status: "Active",
      icon: "palette-line",
    },
    {
      id: 4,
      title: "Video Editing",
      category: "Media",
      price: "₹7,500",
      requests: 4,
      status: "Inactive",
      icon: "video-line",
    },
  ];

  const requests = [
    {
      id: 1,
      customer: "Rahul Sharma",
      service: "Website Development",
      budget: "₹20,000",
      status: "New",
    },
    {
      id: 2,
      customer: "Amit Verma",
      service: "SEO Optimization",
      budget: "₹10,000",
      status: "In Review",
    },
    {
      id: 3,
      customer: "Sarah Wilson",
      service: "Graphic Design",
      budget: "₹6,500",
      status: "Approved",
    },
  ];

  return (
    <main className="w-full min-h-full bg-bg">
      {/* HEADER */}
      <section className="bg-white border-b border-border">
        <div className="px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-primary font-medium">Service Management</p>

              <h1 className="text-4xl font-bold mt-1 text-text-primary">
                Manage Services
              </h1>

              <p className="text-text-secondary mt-2">
                Organize, track and optimize all your marketplace services.
              </p>
            </div>

            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 hover:opacity-90 transition">
              <i className="ri-add-line text-lg"></i>
              Add Service
            </button>
          </div>

          {/* SEARCH */}
          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
              />
            </div>

            <select className="px-5 py-4 rounded-2xl border border-border bg-bg outline-none">
              <option>All Services</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Active Services",
              value: "12",
              icon: "ri-briefcase-line",
            },
            {
              title: "Pending Requests",
              value: "28",
              icon: "ri-notification-3-line",
            },
            {
              title: "Customers",
              value: "184",
              icon: "ri-user-heart-line",
            },
            {
              title: "Revenue",
              value: "₹48K",
              icon: "ri-money-rupee-circle-line",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-border p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-secondary text-sm">{item.title}</p>

                  <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex justify-center items-center">
                  <i className={`${item.icon} text-2xl text-primary`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 pb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-primary font-medium">My Services</p>

            <h2 className="text-3xl font-bold mt-1 text-text-primary">
              Service Listings
            </h2>
          </div>

          <span className="text-text-secondary">
            {services.length} Services
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-border rounded-3xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex justify-center items-center">
                  <i className={`ri-${service.icon} text-2xl text-primary`}></i>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : service.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {service.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-5">{service.title}</h3>

              <p className="text-text-secondary mt-1">{service.category}</p>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Price</span>

                  <span className="font-semibold">{service.price}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-text-secondary">Requests</span>

                  <span className="font-semibold">{service.requests}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button className="flex-1 py-3 rounded-xl border border-border hover:bg-bg transition">
                  Edit
                </button>

                <button className="flex-1 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REQUESTS */}
      <section className="px-8 pb-8">
        <div className="mb-6">
          <p className="text-primary font-medium">Customer Requests</p>

          <h2 className="text-3xl font-bold mt-1 text-text-primary">
            Recent Inquiries
          </h2>
        </div>

        <div className="bg-white border border-border rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-bg">
                  <th className="text-left p-5 font-medium">Customer</th>

                  <th className="text-left p-5 font-medium">Service</th>

                  <th className="text-left p-5 font-medium">Budget</th>

                  <th className="text-left p-5 font-medium">Status</th>

                  <th className="text-left p-5 font-medium">Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b border-border last:border-none hover:bg-bg/50 transition"
                  >
                    <td className="p-5 font-medium">{request.customer}</td>

                    <td className="p-5">{request.service}</td>

                    <td className="p-5 font-semibold">{request.budget}</td>

                    <td className="p-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          request.status === "Approved"
                            ? "bg-green-100 text-green-600"
                            : request.status === "In Review"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>

                    <td className="p-5">
                      <button className="text-primary font-semibold hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
