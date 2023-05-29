import { SEDES as sedes } from "../../../../data/sedesData";
import { useParams } from "react-router-dom";

const HorariosDeClases = ({ sedeId }) => {
  sedeId = useParams()
  const id = Object.values(sedeId)[0]
  const existSede = sedes.filter((sede) => sede.id === id);
  if (existSede) {
    return (
      <>
        {existSede.map((sede) => {
          return (
            <div className="flex flex-col gap-5 m-7 p-8 mb-[5%] place-items-center" key={sede.id}>
              <span className="text-blue-500 text-3xl font-extrabold italic uppercase">
                {sede.nombre}
              </span>
              <span className="text-white text-5xl font-extrabold italic uppercase tracking-wider">
                <span className="border-t-[2px]">horario</span> de
                <span className="border-b-[2px]">clases</span>
              </span>
              <div className="bg-black rounded-xl p-5 mt-10">
                <img src={`/img/horarios/${sede.horarios}`} height={700} width={700} alt="imagen"/>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default HorariosDeClases;
