import React from 'react'

function InventoryShowPeace() {
  return (
    <div className='w-full sm:py-16 sm:px-10 rounded-lg shadow-lg bg-white text-text-primary'>
      <div className="flex justify-between items-center">
        <span className='space-y-2'>
          <h3 className='font-semibold text-5xl'>Inventory</h3>
          <p className='text-sm text-text-muted'>Track your product and stock levels</p>
        </span>
        <button className='px-6 py-2 bg-accent rounded-full border-border shadow-lg text-white'>Add Product</button>
      </div>
    </div>
  )
}

export default InventoryShowPeace