import React from 'react'
import CardsPrecios from './cardsPaquetes/cardsPrecios'

function Precios() {
  return (
    <>
    <div className="flex flex-col gap-5 mt-[10%]">
        <h1 className="uppercase text-4xl italic font-bold text-center">
          precios jockey gym personal training
        </h1>
        <div className="grid grid-cols-3 p-8 gap-5">
          <CardsPrecios />
        </div>
      </div>
    </>
  )
}

export default Precios