const Presentation = () => {
    return (
      <>
        <div className="mt-[5%] flex flex-col">
          <div className="bg-black p-8 flex flex-col place-items-center gap-5 m-7 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white uppercase tracking-wider mt-5">
              Resultados garantizados por contrato
            </h1>
            <span className="text-[#E3C501] uppercase animate-bounce">
              conseguí tu plan de entrenamiento personalizado 100% gratis.
            </span>
            <div className="flex flex-row gap-5 p-5 mt-8 place-items-center">
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/w8lYakHPh1E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="p-5 text-white">
                <p className="text-justify tracking-wider text-xl font-light">
                  ¿Cuanto vale tu salud, bienestar, estética, rendimiento y estar
                  acompañado al lado de los mejores profesionales? Es hora de
                  <span className="font-bold">IR POR TUS SUEÑOS</span>. No dejes
                  pasar esta <span className="font-bold">OPORTUNIDAD ÚNICA</span>{" "}
                  de cambiar tu vida con el mejor servicio de entrenamiento
                  personalizado de la provincia. No solo entrenarás en el gimnasio
                  con el mejor servicio e instalaciones, sino que lo harás con un{" "}
                  <span className="font-bold">
                    PROPÓSITO: MEJORAR TODOS LOS DÍAS.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Presentation;
  