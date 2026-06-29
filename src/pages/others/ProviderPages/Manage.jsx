import LoadingAnime from "../../../components/Common/LoadingAnime";
import { useMyServicesQuery } from "../../../store/reducers/user";
import ErrorMessage from "../../../components/Common/ErrorMessage";
import ImageSlider from "../../../components/Common/ImageSlider";

export default function Manage() {
  const { data, isLoading, isError, isFetching } = useMyServicesQuery();
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {isLoading && <LoadingAnime />}
          {isError && <ErrorMessage />}
          {data?.data?.length === 0 && (
            <p>No services founded, create a service</p>
          )}

          {data?.data?.length !== 0 &&
            data?.data?.map((item, idx) => (
              <div
                key={idx}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="aspect-16/10 overflow-hidden relative">
                  <ImageSlider images={item.media} mode={true} />

                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                      item.status === "active"
                        ? "bg-green-500/90 text-white"
                        : "bg-red-500/90 text-white"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {item.serviceCategory}
                      </span>

                      <h2 className="mt-3 line-clamp-2 text-xl font-bold text-slate-900">
                        {item.serviceName}
                      </h2>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-text-primary/50">Starting</p>
                      <h3 className="text-2xl font-bold text-primary">
                        ₹{item.price.toLocaleString()}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-text-primary/50">
                    {item.sortDescription}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-slate-100 bg-primary/5 p-4">
                      <p className="text-xs text-text-primary/50 ">Reviews</p>
                      <h4 className="mt-1 text-lg font-semibold">
                        {item.totalReviews}
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-border bg-primary/5 p-4">
                      <p className="text-xs text-slate-500">Rating</p>
                      <h4 className="mt-1 flex items-center gap-1 text-lg font-semibold">
                        <i className="ri-star-fill text-accent/95"></i>
                        {item.ratings}
                      </h4>
                    </div>
                  </div>

                  {/* Push buttons to bottom */}
                  <div className="mt-auto pt-6 flex gap-3">
                    <button className="flex-1 rounded-xl bg-primary py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90">
                      Edit Service
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100">
                      <i className="ri-more-2-fill text-lg"></i>
                    </button>
                  </div>
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
