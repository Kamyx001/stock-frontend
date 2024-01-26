import React from 'react'

type CardGridProps = {
  children: React.ReactNode;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  return (
    <div className="flex flex-wrap items-start w-full gap-3 p-0 justify-evenly">
      {props.children}
    </div>
  )
}

export default CardGrid