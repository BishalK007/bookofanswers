'use client'
import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
import React, { useState } from 'react'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import Image from 'next/image'

const Page = () => {
  const [isDrawing, setIsDrawing] = useState<Boolean>(false)
  const [responsequote, setResponsequote] = useState("Your Answer Will be visible here");

  const onButtonClick = async () => {
    if(!isDrawing){
      setIsDrawing(true);
    }
    else{
      const response = await fetch('/api/getrandomquote');
      const data = await response.json();
      setResponsequote(data.quote);
      setIsDrawing(false);
    }
  }


  return (
    <div className='gradient-background w-screen h-[100dvh] font-medival flex flex-col px-10 text-center content-center'>
  <div className='flex flex-row justify-center text-5xl font-bold text-customBrown pt-10'>Book To Answers</div>
  <div className='w-full flex-grow flex flex-col justify-evenly items-center content-evenly text-2xl md:text-5xl'>
    <div>
      {!isDrawing && <div>'Think of the question you want answers to, tap start and concentrate.'</div>}
      {isDrawing && <div>'When You want your answer tap stop'</div>}
    </div>
    {!isDrawing && <div className='fade-in'>{responsequote}</div>}
    {isDrawing &&
      <div className="animate-bounce">
        <Image src="/mascot.png" className='sm:scale-125' height={200} width={200} alt="Animated Image" />
      </div>
    }
  </div>
  <Button className={cn('text-white p-5 clip-diamond self-center bg-customBrown h-12 w-30 text-2xl sm:h-14 sm:w-40 sm:text-4xl mb-10')}
    onClick={onButtonClick}
  >{isDrawing ? 'Stop' : 'Start'}</Button>
</div>
  )
}

export default Page