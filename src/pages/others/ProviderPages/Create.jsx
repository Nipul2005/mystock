import { useState } from "react";
import { useCreateServiceMutation } from "../../../store/reducers/user";
import toast from "react-hot-toast";
import LoadingAnime from "../../../components/Common/LoadingAnime";

export default function Create() {
  const [createService, { isLoading, error, isSuccess }] =
    useCreateServiceMutation();
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceCategory: "",
    sortDescription: "",
    description: "",
    price: "",
    media: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMediaChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      media: [...e.target.files],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        Object.values(formData).some(
          (value) => typeof value === "string" && value.trim() === "",
        )
      ) {
        return toast.error("Please fill in all fields.");
      }

      const data = new FormData();

      data.append("serviceName", formData.serviceName);
      data.append("serviceCategory", formData.serviceCategory);
      data.append("sortDescription", formData.sortDescription);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("media", formData.media);

      formData.media.forEach((file) => {
        data.append("files", file);
      });

      const response = await createService(data).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="w-full min-h-screen bg-bg p-6 lg:p-8">
      {/* HEADER */}

      <section className="bg-white border border-border rounded-3xl p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <i className="ri-store-2-line"></i>
              Service Creation
            </span>

            <h1 className="text-4xl font-bold text-text-primary mt-4">
              Create New Service
            </h1>

            <p className="text-text-secondary mt-2">
              Publish a professional service and start receiving customer
              requests.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-2xl border border-border font-medium">
              Save Draft
            </button>

            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-2xl bg-primary text-white font-medium"
            >
              {isLoading ? "Publicing..." : "Public service"}
            </button>
          </div>
        </div>
      </section>

      <div className="grid xl:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <form className="xl:col-span-2 space-y-8">
          {/* SERVICE INFO */}

          <section className="bg-white border border-border rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <i className="ri-information-line text-2xl text-primary"></i>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Service Information</h2>

                <p className="text-text-secondary">
                  Tell customers what you're offering.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* service name */}
              <div>
                <label className="block mb-2 font-medium">Service Name</label>

                <input
                  type="text"
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleChange}
                  placeholder="Professional Website Development"
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
                />
              </div>
              {/* category */}
              <div>
                <label className="block mb-2 font-medium">Category</label>

                <select
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
                >
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Digital Marketing</option>
                  <option>Video Editing</option>
                </select>
              </div>
              {/* sort descrition */}
              <div>
                <label className="block mb-2 font-medium">
                  Short Description
                </label>

                <input
                  type="text"
                  name="sortDescription"
                  value={formData.sortDescription}
                  onChange={handleChange}
                  placeholder="Modern responsive websites for businesses"
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
                />
              </div>
              {/* descrition */}
              <div>
                <label className="block mb-2 font-medium">
                  Detailed Description
                </label>

                <textarea
                  rows={6}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your service in detail..."
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary resize-none"
                />
              </div>
            </div>
          </section>

          {/* PRICING */}

          <section className="bg-white border border-border rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Pricing & Delivery</h2>

                <p className="text-text-secondary">
                  Set pricing and delivery expectations.
                </p>
              </div>
            </div>

            <div className="w-full">
              <div>
                <label className="block mb-2 font-medium">Starting Price</label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="15000"
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg"
                />
              </div>
            </div>
          </section>

          {/* MEDIA */}

          <section className="bg-white border border-border rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                <i className="ri-image-add-line text-2xl text-purple-600"></i>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Service Gallery</h2>

                <p className="text-text-secondary">
                  Upload images that showcase your work.
                </p>
              </div>
            </div>

            <label className="border-2 border-dashed border-border rounded-3xl h-56 flex flex-col justify-center items-center cursor-pointer hover:border-primary transition">
              <i className="ri-upload-cloud-2-line text-5xl text-primary"></i>

              <h3 className="font-semibold text-lg mt-4">
                Upload Service Images
              </h3>

              <p className="text-text-secondary mt-1">
                PNG, JPG, WEBP up to 10MB
              </p>

              <input
                type="file"
                multiple
                accept="image/*"
                name="files"
                onChange={handleMediaChange}
              />
            </label>
          </section>
        </form>
        {/* RIGHT SIDEBAR */}
        <div>
          <div className="sticky top-24">
            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
              <div className="h-56 bg-linear-to-br from-primary/10 to-accent/10 flex justify-center items-center">
                <i className="ri-layout-grid-line text-7xl text-primary"></i>
              </div>

              <div className="p-6">
                <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Web Development
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  Professional Website Development
                </h3>

                <p className="text-text-secondary mt-3">
                  Modern responsive websites designed to help businesses grow
                  online.
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-text-secondary">Starting At</span>

                  <span className="text-2xl font-bold text-primary">
                    ₹15,000
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="ri-check-line text-green-500"></i>
                    Responsive Design
                  </div>

                  <div className="flex items-center gap-2">
                    <i className="ri-check-line text-green-500"></i>
                    SEO Optimized
                  </div>

                  <div className="flex items-center gap-2">
                    <i className="ri-check-line text-green-500"></i>
                    Fast Delivery
                  </div>
                </div>

                <button className="w-full mt-6 py-3 rounded-2xl bg-primary text-white font-medium">
                  Preview Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
