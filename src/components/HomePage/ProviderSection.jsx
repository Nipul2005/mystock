
function ProviderSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 pb-24">
      <div className="mb-12 text-center">
        <p className="text-primary font-medium">Professionals</p>
        

        <h2 className="text-4xl md:text-5xl font-bold">Top Providers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl border border-border p-8 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">
              T
            </div>

            <h3 className="mt-5 text-xl font-bold">Turtlabs</h3>

            <p className="text-text-secondary">24 Active Services</p>

            <div className="mt-3 text-amber-500">⭐ 4.9</div>

            <button className="mt-6 w-full py-3 rounded-2xl border border-border hover:bg-hover transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProviderSection