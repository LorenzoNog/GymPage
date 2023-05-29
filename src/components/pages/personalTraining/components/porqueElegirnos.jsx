const PorqueElegirnos = () => {
    return (
      <>
        <div className="flex flex-col place-items-center mt-8 p-8 gap-5">
          <h2 className="text-5xl text-center font-extrabold uppercase">
            ¿Por qué elegir jockey gym personal training?
          </h2>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="bg-black p-5 w-[50vw] mt-5 border-t-4 border-r-4 hover:scale-[1.05] ease-in duration-100">
              <p className="font-light text-[#55B7E1] text-xl text-justify text-right">
                Es un programa de{" "}
                <span className="font-bold">TRANSFORMACIÓN PERSONAL</span>, donde
                buscamos crear un
                <span className="font-bold"> CAMBIO REAL</span> en el alumno, con
                la presencia de nuestro staff de entrenadores y nutricionistas que
                te{" "}
                <span className="font-bold underline">GUIARÁN EN EL PROCESO</span>
                .
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-2">
            <div></div>
            <div className="bg-black p-5 w-[45vw] mt-5 border-t-4 border-l-4 hover:scale-[1.05] ease-in duration-100">
              <p className="font-light text-[#55B7E1] text-xl text-justify text-right">
                Nuestro equipo de expertos se pondrá a tu disposición para que
                tengas los mejores resultados que{" "}
                <span className="font-bold">JAMÁS HAYAS VISTO</span>.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default PorqueElegirnos;
  