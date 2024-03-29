import React from 'react'
import { Skeleton } from './ui/skeleton'

const StockCardSkeleton = () => {
  return (
    <Skeleton className="z-50 grid w-40 h-40 grid-cols-2 grid-rows-1 bg-white md:w-80 rounded-xl opacity-20">
      <div className="flex flex-col">
        <Skeleton className="w-20 h-9 m-[1.4rem] mb-2 " />
        <Skeleton className="ml-[1.4rem] rounded-sm h-4 w-28" />
        <Skeleton className="w-16 h-8 m-[1.4rem] mb-2" />
      </div>
      <div className="items-center justify-center hidden md:flex">
        <Skeleton className="h-32 m-6 ml-0 w-36" />
      </div>
    </Skeleton>
  )
}

export default StockCardSkeleton