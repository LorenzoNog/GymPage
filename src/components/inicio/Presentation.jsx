import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="mt-[6%] pl-10 flex flex-col gap-[50px]">
          <span className="text-xl uppercase text-white font-bold tracking-wider border-2 rounded-[25px] p-3 w-fit">
            El mejor gimnasio de Yerba Buena
          </span>
          <div className="flex flex-col gap-5 uppercase text-5xl font-bold text-white">
            <div>
              <span id="textStroke" className="text-7xl">
                no
              </span>
              <span> te conformes.</span>
            </div>
            <div>
              <span>Buscás un cambio físico?</span>
            </div>
            <div>
              <span className="text-sm tracking-wider">
                Aquí te ayudaremos a moldear y construir tu cuerpo ideal para
                vivir tu vida al máximo.
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-[5%] uppercase justify-left">
            <div className="flex flex-col">
              <span className="font-bold text-white text-3xl">30 años</span>
              <span className="text-gray-500">De experiencia</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-3xl">+6000</span>
              <span className="text-gray-500">miembros</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-3xl">100%</span>
              <span className="text-gray-500">resultados garantizados</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-[-10px]">
            <Link to='/registro'>
              <button className="bg-[#1f79a1] w-fit p-2  font-bold text-white text-sm border-2 border-[#1f79a1] hover:text-black hover:bg-white ease-in duration-100">
                Comenzar ahora
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-[6%] pl-10 ">
            <img 
                src={'/img/pages/inicio/backgroundnew.png'}
                width={320}
                height={300}
                className="absolute z-[-1] right-[5.5%] blur-sm rotate-45"
                alt="imagen"
            />
            <img
                src={'/img/pages/inicio/runnerfinal.png'}
                width={450}
                height={500}
                className="absolute right-[1%] top-[43%]"
                alt="imagen"
            />
        </div>
      </div>
    </>
  );
};

export default Presentation;
