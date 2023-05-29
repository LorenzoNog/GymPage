import { Link } from "react-router-dom";
import {SEDES} from '../../data/sedesData'

const Cards = () => {
  return (
    <div className="flex flex-row gap-4 mt-[2%]">
      {SEDES.map((sucursal) => {
        return (
          <div key={sucursal.id} className="border-t-[2px] border-gray-600 w-[16%] gap-5 flex flex-col p-3 hover:border-white hover:bg-white ease-in duration-100">
            <h3 className="text-black font-bold italic text-2xl uppercase">
              {sucursal.nombre}
            </h3>
            <span className="text-gray-600 font-semibold text-sm">
              {sucursal.direccion}
            </span>
            <div className="flex justify-stretch">
              <Link to={`${sucursal.id}`}>
                <button className="font-semibold hover:underline ">
                  Descubre más
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
