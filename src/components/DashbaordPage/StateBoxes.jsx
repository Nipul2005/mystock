
export default function StatsBoxes() {
  const stats = [
    {
      title: "Active Services",
      value: "12",
      icon: "ri-briefcase-line",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Pending Requests",
      value: "28",
      icon: "ri-file-list-3-line",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Customers",
      value: "184",
      icon: "ri-user-heart-line",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Revenue",
      value: "₹48K",
      icon: "ri-money-rupee-circle-line",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="w-full px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-primary text-sm font-semibold">
            Business Overview
          </p>

          <h2 className="text-3xl font-bold text-text-primary mt-1">
            Your Performance
          </h2>

          <p className="text-text-secondary mt-2">
            Track services, requests and business growth.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-primary text-white font-medium">
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="
              bg-white
              border
              border-border
              rounded-3xl
              p-6
              hover:shadow-lg
              transition-all
            "
          >
            <div
              className={`
                w-12 h-12
                rounded-2xl
                flex items-center justify-center
                ${item.color}
              `}
            >
              <i className={`${item.icon} text-xl`} />
            </div>

            <h3 className="mt-5 text-sm text-text-secondary">{item.title}</h3>

            <p className="mt-2 text-4xl font-bold text-text-primary">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
