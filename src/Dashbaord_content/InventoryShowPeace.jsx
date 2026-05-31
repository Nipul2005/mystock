import React from "react";

function InventoryShowPeace() {
  const products = [
    {
      name: "Wireless Headphones",
      stock: 34,
      price: "₹2,499",
      status: "In Stock",
    },
    {
      name: "Gaming Mouse",
      stock: 8,
      price: "₹1,299",
      status: "Low Stock",
    },
    {
      name: "Mechanical Keyboard",
      stock: 16,
      price: "₹3,999",
      status: "In Stock",
    },
    {
      name: "Smart Watch",
      stock: 0,
      price: "₹5,499",
      status: "Out of Stock",
    },
  ];
  return (
    <div className="w-full sm:py-16 sm:px-10 py-6 px-5 rounded-lg shadow-lg text-text-primary bg-white space-y-6">
      <div className="flex justify-between items-center">
        <span className="space-y-1">
          <h3 className="lg:text-5xl md:text-4xl text-3xl  font-semibold">
            Inventory
          </h3>
          <p className="text-sm text-text-muted">
            Track your product and stock levels
          </p>
        </span>
        <button className="px-6 py-2 bg-accent rounded-full border-border shadow-lg text-white md:flex hidden">
          Add Product
        </button>
      </div>
      <div className="overflow-x-auto w-full rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-accent/50">
              <th className="text-left px-4 py-3">Product</th>
              <th className="text-center px-4 py-3">Stock</th>
              <th className="text-center px-4 py-3">Price</th>
              <th className="text-right px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.name}
                className="border-b border-accent/50 hover:bg-hover transition-all"
              >
                <td className="px-4 py-5 font-medium">{product.name}</td>

                <td className="px-4 py-5 text-center">{product.stock}</td>

                <td className="px-4 py-5 text-center">{product.price}</td>

                <td className="px-4 py-5 flex md:justify-end justify-center items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm md:inline hidden ${
                      product.status === "In Stock"
                        ? "bg-green-500/20 text-green-400"
                        : product.status === "Low Stock"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {product.status}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full md:hidden flex ${
                      product.status === "In Stock"
                        ? "bg-green-500"
                        : product.status === "Low Stock"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryShowPeace;
