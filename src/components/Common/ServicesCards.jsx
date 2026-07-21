import React from "react";
import ImageSlider from "./ImageSlider";
import { useSelector } from "react-redux";

function ServicesCards({ item }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl cursor-pointer">
      {/* Thumbnail */}
      <div className="aspect-16/10 overflow-hidden relative">
        <ImageSlider images={item.media} mode={true} imageObjects={[]} />

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
            <h4 className="mt-1 text-lg font-semibold">{item.totalReviews}</h4>
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
        {user?._id == item.provider && (
          <div className="mt-auto pt-6 flex gap-3">
            <button className="flex-1 rounded-xl bg-primary py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90">
              Edit Service
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100">
              <i className="ri-more-2-fill text-lg"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesCards;
