import React from 'react'

function InventoryShowPeace() {
  return (
    <div className='w-full p-4 rounded-lg shadow-lg bg-white'>
      <div className="flex justify-between items-center">
        <span className='space-y-2'>
          <h3 className='font-semibold text-5xl'>Inventory</h3>
          <p className='text-sm text-text-muted'>Track your product and stock levels</p>
        </span>
        <button className='px-6 py-2 bg-linear-90 from-secondary/50 to-white rounded-full border-border shadow-lg text-primary'>Add Product</button>
      </div>
    </div>
  )
}

export default InventoryShowPeace