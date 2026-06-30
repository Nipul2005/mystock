import React from "react";

function AddServiceFeature({handler, feature}) {
  return (
    <section className="bg-white border border-border rounded-3xl p-8 w-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
          <i className="ri-service-line text-2xl text-success"></i>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Features Of your services</h2>

          <p className="text-text-secondary">
            What features your services provides
          </p>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4">
          <input
            type="text"
            name="features"
            placeholder="What makes your serice unique"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg"
          />
          <button
            type="button"
            className="px-10 py-3 bg-primary text-white rounded-lg md:w-auto w-full"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap justify-start items-center">
          <div className="border border-success rounded-full px-5 py-1 bg-success/10 text-success">Border apporch</div>
        </div>
      </div>
    </section>
  );
}

export default AddServiceFeature;
