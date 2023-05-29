import React from "react";
import {PRECIOS as precios} from '../../../../../data/preciosData'

function CardsPrecios() {
  return (
    <>
      {precios.map((precio) => {
        return (
          <div className="bg-gray-200 rounded-xl">
            <div className="bg-gray-300 flex justify-center p-3 rounded-xl">
              <span className="font-bold text-xl">{precio.plan}</span>
            </div>
            <div className="flex flex-col place-items-center gap-5">
              <span className="font-extrabold text-5xl tracking-wider text-gray-600 m-5">
                ${precio.precio}
              </span>
              <span className="border-b-2 border-gray-700 font-semibold text-md">
                {precio.sesiones}
              </span>
              <span className="border-b-2 border-gray-700 font-semibold text-md">
                {precio.adicional1}
              </span>
              <span className="border-b-2 border-gray-700 font-semibold text-md">
                {precio.adicional2}
              </span>
            </div>
            <div className="flex justify-center m-8">
              <button className="uppercase bg-blue-400 rounded p-3 font-semibold hover:bg-white">
                Seleccionar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardsPrecios;
