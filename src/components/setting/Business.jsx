import React from 'react'

function Business() {
  return (
    <section className="bg-white border border-border rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <i className="ri-store-2-line text-2xl text-primary"></i>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            Business Information
          </h2>

          <p className="text-text-secondary">
            Information visible to customers on your profile.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-medium">Business Name</label>

          <input
            type="text"
            placeholder="Turtlabs"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Business Category</label>

          <select className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary">
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Marketing</option>
            <option>Photography</option>
            <option>Consulting</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Experience</label>

          <input
            type="text"
            placeholder="5 Years"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Service Area</label>

          <input
            type="text"
            placeholder="Delhi NCR"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Website</label>

          <input
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Portfolio URL</label>

          <input
            type="url"
            placeholder="https://portfolio.com"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">Business Description</label>

          <textarea
            rows={5}
            placeholder="Tell customers about your business, services, experience and why they should choose you..."
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary resize-none"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-medium">Facebook</label>

          <input
            type="url"
            placeholder="https://facebook.com/yourbusiness"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Instagram</label>

          <input
            type="url"
            placeholder="https://instagram.com/yourbusiness"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">LinkedIn</label>

          <input
            type="url"
            placeholder="https://linkedin.com/company/yourbusiness"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Business Logo</label>

          <input
            type="file"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button className="bg-primary text-white px-8 py-3 rounded-2xl font-medium">
          Update Business
        </button>

        <button className="border border-border px-8 py-3 rounded-2xl font-medium">
          Preview Profile
        </button>
      </div>
    </section>
  );
}

export default Business