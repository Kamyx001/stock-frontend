import React from 'react'

type CardGridProps = {
  children: React.ReactNode;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  return (
    <div className="p-0 mx-3 w-full flex flex-wrap items-start justify-evenly gap-3">
      {props.children}
    </div>
  )
}

export default CardGrid