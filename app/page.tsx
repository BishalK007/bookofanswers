'use client'
import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
import React, { useState } from 'react'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import Image from 'next/image'

const Page = () => {
  const [isDrawing, setIsDrawing] = useState<Boolean>(false)
  const [responsequote, setResponsequote] = useState<String>("Your Answer Will be visible here");
  const [isFirst, setIsFirst] = useState<Boolean>(true);

  const onButtonClick = async () => {
    setIsFirst(false);
    if (!isDrawing) {
      setIsDrawing(true);
    }
    else {
      const response = await fetch('/api/getrandomquote');
      const data = await response.json();
      setResponsequote(data.quote);
      setIsDrawing(false);
    }
  }
  const [hover, setHover] = useState(false);

  return (
    <div className='gradient-background w-screen h-[100dvh] font-medival flex flex-col px-10 text-center content-center'>
      <div className='flex flex-row justify-center text-5xl font-bold text-customBrown pt-10'>Book To Answers 
      <span
        className="text-xl cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setHover(!hover)}
      >
       &#9432;
      </span>
        <div className={cn("absolute right-0 w-32 bg-customBrown text-white text-sm rounded shadow-lg z-20 translate-y-[-100px]  opacity-0 transition-all duration-700", hover && ' translate-y-10 opacity-1')}>
          Hope you realize it&apos;s a JOKE &#33;&#33;
        </div>
      </div> 
      <div className='w-full flex-grow flex flex-col justify-evenly items-center content-evenly text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
        <div className="relative w-full">
          <div className={cn('transition-opacity duration-500 absolute w-full', isDrawing ? 'opacity-0' : 'opacity-1')}>
            &apos;Think of the question you want answers to, tap start and concentrate.&apos;
          </div>
          <div className={cn('transition-opacity duration-500 absolute w-full', isDrawing ? 'opacity-1' : 'opacity-0')}>
            &apos;When You want your answer tap stop&apos;
          </div>
        </div>

        <div className="relative w-full">
          <div className={cn('transition-opacity duration-500 absolute w-full', isDrawing ? 'opacity-0' : 'opacity-1')}>
            <div>{<div className={cn('text-2xl transition-opacity delay-500', isFirst ? 'opacity-0' : 'opacity-1')}>Previous Answer -</div>}<br/>{responsequote}</div>
          </div>
          <div className={cn('transition-opacity duration-500 absolute  flex flex-row justify-center items-center w-full', isDrawing ? 'opacity-1' : 'opacity-0')}>
            <div className="animate-bounce w-fit">
              <Image src="/mascot.png" className='sm:scale-125 self-center' height={200} width={200} alt="Animated Image" />
            </div>
          </div>
        </div>

      </div>
      <Button className={cn('text-white p-5 clip-diamond self-center bg-customBrown h-12 w-30 text-2xl sm:h-14 sm:w-40 sm:text-4xl mb-10')}
        onClick={onButtonClick}
      >{isDrawing ? 'Stop' : 'Start'}</Button>
    </div>
  )
}

export default Page