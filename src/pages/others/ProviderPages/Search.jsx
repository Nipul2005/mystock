export default function Search() {
  const results = [
    {
      id: 1,
      name: "Website Development",
      provider: "Turtlabs",
      category: "Development",
      price: "₹15,000",
      rating: "4.9",
    },
    {
      id: 2,
      name: "Graphic Design",
      provider: "Creative Studio",
      category: "Design",
      price: "₹5,000",
      rating: "4.8",
    },
    {
      id: 3,
      name: "SEO Optimization",
      provider: "Growth Agency",
      category: "Marketing",
      price: "₹8,500",
      rating: "4.7",
    },
    {
      id: 4,
      name: "Video Editing",
      provider: "Vision Media",
      category: "Media",
      price: "₹7,500",
      rating: "4.8",
    },
  ];

  return (
    <main className="w-full min-h-full bg-bg">
      {/* HEADER */}
      <section className="bg-white border-b border-border">
        <div className="p-8">
          <p className="text-primary font-medium">Marketplace Search</p>

          <h1 className="text-4xl font-bold mt-2">Search Services</h1>

          <p className="text-text-secondary mt-2">
            Discover services, providers and opportunities.
          </p>

          {/* SEARCH */}
          <div className="mt-8 relative">
            <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-xl text-text-secondary"></i>

            <input
              type="text"
              placeholder="Search services, providers, categories..."
              className="w-full bg-bg border border-border rounded-3xl py-4 pl-14 pr-5 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className="grid xl:grid-cols-12 gap-6">
          {/* FILTERS */}
          <div className="xl:col-span-3">
            <div className="bg-white border border-border rounded-3xl p-6 sticky top-24">
              <h2 className="font-bold text-xl mb-5">Filters</h2>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium">Category</label>

                  <select className="w-full border border-border rounded-2xl px-4 py-3">
                    <option>All Categories</option>
                    <option>Development</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Media</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Price Range</label>

                  <input type="range" className="w-full" />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Rating</label>

                  <select className="w-full border border-border rounded-2xl px-4 py-3">
                    <option>All Ratings</option>
                    <option>4★ & Above</option>
                    <option>3★ & Above</option>
                  </select>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-2xl">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div className="xl:col-span-9">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Search Results</h2>

              <span className="text-text-secondary">
                {results.length} Results Found
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {results.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-border rounded-3xl p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex justify-center items-center">
                      <i className="ri-briefcase-line text-2xl text-primary"></i>
                    </div>

                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                      Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-5">{service.name}</h3>

                  <p className="text-text-secondary mt-1">{service.provider}</p>

                  <p className="text-sm text-primary mt-2">
                    {service.category}
                  </p>

                  <div className="flex justify-between mt-6">
                    <span className="font-bold text-primary">
                      {service.price}
                    </span>

                    <span>⭐ {service.rating}</span>
                  </div>

                  <button className="w-full mt-6 border border-border py-3 rounded-2xl hover:bg-hover transition">
                    View Service
                  </button>
                </div>
              ))}
            </div>

            {/* EMPTY STATE EXAMPLE */}
            {/* 
            <div className="bg-white border border-border rounded-3xl p-12 text-center">
              <i className="ri-search-eye-line text-6xl text-primary"></i>
              <h3 className="text-2xl font-bold mt-4">
                No Results Found
              </h3>
              <p className="text-text-secondary mt-2">
                Try changing your search keywords.
              </p>
            </div>
            */}
          </div>
        </div>
      </section>
    </main>
  );
}
