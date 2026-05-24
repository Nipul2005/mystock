import React from "react";

export default function StatsBoxes() {
  const stats = [
    {
      title: "Total Stock",
      value: "1,248",
      subtitle: "Items in inventory",
      icon: "📦",
      iconBg: "bg-indigo-100",
      gradient: "from-indigo-100 to-purple-100",
    },
    {
      title: "Products",
      value: "342",
      subtitle: "Across categories",
      icon: "🧊",
      iconBg: "bg-blue-100",
      gradient: "from-blue-100 to-cyan-100",
    },
    {
      title: "Orders",
      value: "186",
      subtitle: "This week",
      icon: "🛒",
      iconBg: "bg-green-100",
      gradient: "from-green-100 to-emerald-100",
    },
    {
      title: "Revenue",
      value: "₹2.4L",
      subtitle: "This month",
      icon: "₹",
      iconBg: "bg-orange-100",
      gradient: "from-orange-100 to-yellow-100",
    },
    {
      title: "Profit",
      value: "₹78K",
      subtitle: "Net earnings",
      icon: "📈",
      iconBg: "bg-pink-100",
      gradient: "from-pink-100 to-rose-100",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 my-5">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden"
        >
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-5 text-2xl`}
          >
            {item.icon}
          </div>

          {/* Content */}
          <p className="text-gray-500 text-sm">{item.title}</p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            {item.value}
          </h2>

          <p className="text-sm text-gray-400 mt-2">{item.subtitle}</p>

          {/* Bottom Gradient */}
          <div
            className={`absolute bottom-0 left-0 w-full h-3 bg-linear-to-r ${item.gradient} opacity-40 rounded-t-full`}
          />
        </div>
      ))}
    </div>
  );
}
