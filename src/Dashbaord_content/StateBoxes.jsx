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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-5 my-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-6 border border-border shadow-xl relative overflow-hidden hover:scale-95 transition-all ease-in-out duration-300 flex justify-between"
        >
          <div className="">
          <div
            className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-5 text-2xl`}
          >
            {item.icon}
            </div>
            {/* Content */}
            <p className="text-text-primary text-sm font-semibold">{item.title}</p>
            <p className="text-sm text-text-muted mt-2">{item.subtitle}</p>

          </div>
          {/* Icon */}
          

          

          <h2 className="text-4xl font-bold text-accent mt-2">
            {item.value}
          </h2>

          
          {/* Bottom Gradient */}
          <div
            className={`absolute bottom-0 left-0 w-full h-3 bg-linear-to-r ${item.gradient} opacity-90 rounded-t-full`}
          />
        </div>
      ))}
    </div>
  );
}
