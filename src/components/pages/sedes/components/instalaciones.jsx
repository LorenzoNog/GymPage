import { SEDES as sedes } from "../../../../data/sedesData"
import { useParams } from "react-router-dom";

const Instalaciones = ({ sedeId }) => {
  sedeId = useParams()
  const id = Object.values(sedeId)[0]
  const existSede = sedes.filter((sede) => sede.id === id);
  if (existSede) {
    return (
      <>
        {existSede.map((sede) => {
          return (
            <div className="bg-black flex flex-row m-7 p-8 rounded-xl mb-[5%]" key={sede.id}>
              <div className="flex flex-col w-[50%] gap-5">
                <span className="text-2xl italic font-bold text-[#6DBFE2] ">
                  INSTALACIONES CON ALTOS ESTÁNDARES DE CALIDAD
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    UN GIMNASIO CERCA,
                  </span>
                  <span className="text-4xl font-extrabold text-white">
                    NO IMPORTA DONDE ESTÁS
                  </span>
                </div>
                <p className="text-justify text-white leading-loose">
                  Actualmente con 7 clubes en la provincia y mas de 30 años en
                  el sector, cambiamos la vida de miles y miles de tucumanos que
                  entrenan todos los días en nuestras instalaciones junto con
                  los mejores profesionales de la actividad física y nutrición.
                  Contamos con una amplia grilla de horarios para que puedas
                  entrenar diariamiente y a tu ritmo. Buscamos constantemente
                  adaptarnos a las necesidades de nuestros socios en cuanto a
                  variedad y tipos de clases.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={`/img/sedes/${sede.img1}`}
                  width={400}
                  height={400}
                  className="absolute right-[10%] animate-pulse"
                  alt="imagen"
                />
                <img
                  src={`/img/sedes/${sede.img2}`}
                  width={200}
                  height={200}
                  className="absolute right-[6%] top-[105%] animate-pulse"
                  alt="imagen"
                />
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default Instalaciones;
