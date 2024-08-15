import React from 'react'

export default function Background() {
  return (
    <div className='fixed z-[2] h-screen w-full'>
      <div className='absolute top-[5%] w-full py-8 flex justify-center text-zinc-600 text-xl bg'>
        Document.
        </div>
      <h1 className='text-zinc-900 font-semibold text-[8vw] top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%] leading-none'>Mini-Docs.</h1>
    </div>
  )
}
