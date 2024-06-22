import { cn } from '@lib/utils'
import React from 'react'

const Button = () => {
  return (
    <div className={cn(
      'text-white p-5 clip-diamond',
      'bg-customBrown'
    )}>Button</div>
  )
}

export default Button