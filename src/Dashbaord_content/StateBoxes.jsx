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
    <div className="w-full">
      {/* {stats.map((item, index) => (
        
      ))} */}
      <div className="border w-full">
        
        <h3 className="">Total Stock</h3>
        <span className="w-full border inline-block bg-accent">
          <span className="inline-block border-red-200 border"></span>
        </span>
      </div>
    </div>
  );
}
