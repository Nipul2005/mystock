import React from "react";
import { Link } from "react-router-dom";

function ShowProvidersList({ data }) {
  return (
    <article
      className="
                bg-white
                border
                border-border
                rounded-4xl
                p-7
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
              "
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold">
          image
        </div>

        <div>
          <h3 className="font-semibold text-xl">{data.name}</h3>

          <p className="text-text-secondary">category</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-sm text-text-secondary">Rating</p>

          <p className="font-semibold">⭐ rating</p>
        </div>

        <div>
          <p className="text-sm text-text-secondary">Services</p>

          <p className="font-semibold">services</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to={`/provider/${data.userName}`}
          className="flex-1 text-center py-3 rounded-2xl bg-primary text-white font-medium"
        >
          View Profile
        </Link>

        <button className="w-12 h-12 rounded-2xl border border-border">
          <i className="ri-message-3-line"></i>
        </button>
      </div>
    </article>
  );
}

export default ShowProvidersList;
