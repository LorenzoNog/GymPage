import { SEDES as sedes } from "../../../../data/sedesData"
import { useParams } from "react-router-dom";

const Presentation =  ({sedeId}) => {
  sedeId = useParams()
  const id = Object.values(sedeId)[0]
  const existSede = sedes.filter((sede) => sede.id === id);
  
  if (existSede) {
    return (
      <>
        {existSede.map((sede) => {
          return (
            <div className="flex flex-row p-[2%] mb-[5%]" key={sede.id}>
              <div className="flex flex-col">
                <h1 className="text-[90px]  font-extrabold italic text-black tracking-wide uppercase">
                  {sede.nombre}
                </h1>
                <div className="w-[60%]">
                  <p className="text-justify p-2 tracking-wider text-xl text-gray-700">
                    Jockey Gym: El gimnasio líder en el centro de San Miguel de
                    Tucumán, Argentina. Ofrece instalaciones modernas y variadas
                    rutinas de entrenamiento para todos los niveles.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mr-[8%] w-[50%] justify-center p-3 gap-3 font-semibold italic shadow-2xl rounded-3xl hover:scale-[1.1]">
                <span>{sede.direccion}</span>
                <span className="text-[#1f79a1]">{sede.localidad}</span>
                <span>+54 381 421-9411</span>
                <div className="flex flex-col">
                  <span className="text-[#1f79a1]">Horario:</span>
                  <span> L - V: 6:00 - 23:00</span>
                  <span> S: 9:00 - 13:30 / 16:30 - 21:00</span>
                  <span> D: Cerrado</span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    throw new Error
  }
};

export default Presentation;
