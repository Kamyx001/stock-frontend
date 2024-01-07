import React from 'react'
import { Skeleton } from './ui/skeleton'

const StockCardSkeleton = () => {
  return (
    <Skeleton className="md:w-80 w-40 h-40 grid grid-cols-2 grid-rows-1 z-50 rounded-xl">
      <div className="flex flex-col">
        <Skeleton className="w-20 h-9 m-[1.4rem] mb-2 " />
        <Skeleton className="ml-[1.4rem] rounded-sm h-4 w-28" />
        <Skeleton className="w-16 h-8 m-[1.4rem] mb-2" />
      </div>
      <div className="md:flex hidden items-center justify-center">
        <Skeleton className="m-6 ml-0 w-36 h-32" />
      </div>
    </Skeleton>
  )
}

export default StockCardSkeleton