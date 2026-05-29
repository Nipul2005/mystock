import React from "react";

export default function StatsBoxes() {
  const stats = [
    {
      title: "Total Stock",
      value: "1,248",
      subtitle: "Items in inventory",
      icon: "📦",
      iconBg: "bg-indigo-100",
      gradient: "from-indigo-300 to-purple-150",
    },
    {
      title: "Products",
      value: "342",
      subtitle: "Across categories",
      icon: "🧊",
      iconBg: "bg-blue-100",
      gradient: "from-blue-300 to-cyan-150",
    },
    {
      title: "Orders",
      value: "186",
      subtitle: "This week",
      icon: "🛒",
      iconBg: "bg-green-100",
      gradient: "from-green-300 to-emerald-150",
    },
    {
      title: "Revenue",
      value: "₹2.4L",
      subtitle: "This month",
      icon: "₹",
      iconBg: "bg-orange-100",
      gradient: "from-orange-300 to-yellow-150",
    },
    {
      title: "Profit",
      value: "₹78K",
      subtitle: "Net earnings",
      icon: "📈",
      iconBg: "bg-pink-100",
      gradient: "from-pink-300 to-rose-150",
    },
  ];
  return (
    <div className="w-full space-y-8 px-6 py-9 bg-white shadow-xl rounded-lg flex-1">
      {stats.map((item, index) => (
        <div className="w-full flex flex-col items-start justify-between space-y-1">
          <h3 className="">{item.title}</h3>
          <div style={{ "--after-content": `"${item.value}"` }} className={`w-full bg-text-primary/10 relative after:content-(--after-content) after:absolute after:right-0 after:bottom-2`}>
            <div className={`w-1/2 h-1 bg-linear-to-r ${item.gradient} rounded-full`}></div>
          </div>
      </div>
      ))}
      
    </div>
  );
}
