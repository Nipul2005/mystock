import React from 'react'
import Sidebar_menues from '../components/Sidebar_menues';

function Dashboard() {
  return (
    <div className="w-full h-full overflow-hidden lg:col-span-10 md:col-span-11 col-span-full md:row-span-12 row-span-11 px-5 py-5 space-y-10">
      <header className="w-full flex justify-between items-center gap-4">
        <div>
        <h1 className='lg:text-5xl md:text-4xl text-3xl text-accent font-bold'>Dashboard</h1>
        <p>Manage your store here, with <span className='text-primary font-bold'>outless</span></p>
        </div>
      
        <button className='px-4 border-primary rounded-full border-2 py-2 hover:bg-primary hover:text-white shadow-2xl text-accent cursor-pointer duration-300 md:flex hidden'>Create Product</button>
        <Sidebar_menues name={"Setting"} icon_name={"equalizer"} classes={"md:hidden flex"}/>
      </header>

      <div className="flex gap-2">
        <div className="flex-1 flex justify-between items-center px-4 py-3 text-3xl font-semibold text-accent bg-primary/20 rounded-lg">
          <h3 className=''>Total stock</h3>
          <p className=''>1</p>
        </div>
        <div className="flex-1 border">
          <h3>Total stock</h3>
        </div>
        <div className="flex-1 border">
          <h3>Total stock</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard 
