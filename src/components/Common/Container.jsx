import React from 'react'

function Container({children}) {
  return (
    <section className="2xl:container 2xl:mx-auto w-full h-full grid grid-cols-12 grid-rows-12 bg-bg relative text-black align-center">
      {children}
    </section>
  );
}

export default Container