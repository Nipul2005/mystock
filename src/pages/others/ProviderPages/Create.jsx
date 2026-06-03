export default function Create() {
  return (
    <main className="w-full min-h-full bg-bg">
      {/* HEADER */}
      <section className="bg-white border-b border-border">
        <div className="p-8">
          <p className="text-primary font-medium">Service Creation</p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2 gap-4">
            <div>
              <h1 className="text-4xl font-bold">Create New Service</h1>

              <p className="text-text-secondary mt-2">
                Publish a new service and start receiving customer requests.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-3 rounded-2xl border border-border">
                Save Draft
              </button>

              <button className="px-5 py-3 rounded-2xl bg-primary text-white">
                Publish
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className="grid xl:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="xl:col-span-2 space-y-6">
            {/* BASIC INFO */}
            <div className="bg-white border border-border rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-6">Service Information</h2>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium">Service Name</label>

                  <input
                    type="text"
                    placeholder="Website Development"
                    className="w-full border border-border rounded-2xl px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Category</label>

                  <select className="w-full border border-border rounded-2xl px-4 py-3 outline-none">
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Marketing</option>
                    <option>Video Editing</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Short Description
                  </label>

                  <input
                    type="text"
                    placeholder="Professional responsive websites"
                    className="w-full border border-border rounded-2xl px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Detailed Description
                  </label>

                  <textarea
                    rows={6}
                    className="w-full border border-border rounded-2xl px-4 py-3 outline-none resize-none"
                    placeholder="Describe your service..."
                  />
                </div>
              </div>
            </div>

            {/* PRICING */}
            <div className="bg-white border border-border rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-6">Pricing & Delivery</h2>

              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block mb-2 font-medium">
                    Starting Price
                  </label>

                  <input
                    type="number"
                    placeholder="15000"
                    className="w-full border border-border rounded-2xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Delivery Time
                  </label>

                  <input
                    type="text"
                    placeholder="7 Days"
                    className="w-full border border-border rounded-2xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Revisions</label>

                  <input
                    type="number"
                    placeholder="3"
                    className="w-full border border-border rounded-2xl px-4 py-3"
                  />
                </div>
              </div>
            </div>

            {/* MEDIA */}
            <div className="bg-white border border-border rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-6">Service Media</h2>

              <div className="border-2 border-dashed border-border rounded-3xl h-52 flex flex-col justify-center items-center text-text-secondary">
                <i className="ri-image-add-line text-5xl"></i>

                <p className="mt-3">Upload Thumbnail or Gallery Images</p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="bg-white border border-border rounded-3xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Service Features</h2>

                <button className="bg-primary text-white px-4 py-2 rounded-xl">
                  Add Feature
                </button>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Responsive Design"
                  className="w-full border border-border rounded-2xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="SEO Optimization"
                  className="w-full border border-border rounded-2xl px-4 py-3"
                />
              </div>
            </div>
          </div>

          {/* PREVIEW */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white border border-border rounded-3xl overflow-hidden">
                <div className="h-48 bg-primary/10 flex justify-center items-center">
                  <i className="ri-layout-4-line text-7xl text-primary"></i>
                </div>

                <div className="p-6">
                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    Preview
                  </span>

                  <h3 className="text-2xl font-bold mt-4">
                    Website Development
                  </h3>

                  <p className="text-text-secondary mt-2">
                    Professional modern website development service.
                  </p>

                  <div className="mt-5 flex justify-between">
                    <span className="font-semibold">Starting From</span>

                    <span className="text-primary font-bold">₹15,000</span>
                  </div>

                  <button className="w-full mt-6 bg-primary text-white py-3 rounded-2xl">
                    View Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
