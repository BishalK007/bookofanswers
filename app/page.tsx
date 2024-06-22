import Button from '@components/button'
import React from 'react'

const Page = () => {
  return (
    <div className='gradient-background  w-screen h-screen font-medival flex flex-col px-10 text-center'>
      <div className='flex flex-row justify-center text-7xl pt-10'>Book To Answers</div>
      <div className='w-full flex-grow flex flex-col justify-center items-center text-5xl'>
        Think of the question you want answers to and tap start.
        <Button
        />
      </div>

    </div>
  )
}

export default Page