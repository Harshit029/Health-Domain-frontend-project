import React from 'react'
import { cn } from './utils/cn'

export function Label({ className, children, ...props }) {
  return (
    <label 
      className={cn(
        "block text-sm font-medium text-gray-700", 
        className
      )} 
      {...props}
    >
      {children}
    </label>
  )
}