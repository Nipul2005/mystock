import React from 'react'

function InventoryShowPeace() {
  return (
    <div className="w-full sm:py-16 sm:px-10 py-6 px-5 rounded-lg shadow-lg text-text-primary bg-white">
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
      <div className=""></div>
    </div>
  );
}

export default InventoryShowPeace