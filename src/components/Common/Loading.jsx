import React from 'react'

function Loading() {
  return (
    <div className='w-full min-h-dvh flex flex-col justify-center items-center'>
        <span className='w-10 h-10 border-black border-t-white border-2 rounded-full animate-spin'></span>
        <p className='text-text-primary mt-2'>Please wait security checks 😊</p>
    </div>
  )
}

export default Loading