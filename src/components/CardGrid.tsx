import React from 'react'

type CardGridProps = {
  children: React.ReactNode;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  return (
    <div className="m-5 w-full flex flex-wrap items-start justify-evenly gap-5">
      {props.children}
    </div>
  )
}

export default CardGrid