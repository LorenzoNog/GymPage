const Beneficios = () => {
    return (
      <div className="bg-black flex flex-col m-7 p-10 rounded-xl mb-[5%]">
        <div className="flex flex-col gap-5">
          <span className="text-sm text-center font-bold text-[#E3C501] tracking-widest italic">
            El mejor equipo de profesionales te espera
          </span>
          <span className="uppercase text-white text-4xl italic font-extrabold tracking-wider text-center">
            Además, tu plan incluye
          </span>
        </div>
        <div className="grid grid-cols-3 p-5 gap-5 mt-3">
          <div className="p-2 flex flex-col place-items-center">
            <span className="text-[#6DBFE2] text-2xl uppercase font-semibold mb-3">
              Personal trainers
            </span>
            <p className="text-white text-center text-justify">
              No tenés porque entrenar solo/a, queremos ayudarte a que cumplas tus
              objetivos con el mejor plan de entrenamiento con nuestros coaches.
            </p>
          </div>
          <div className="p-2 flex flex-col place-items-center">
            <span className="text-[#6DBFE2] text-2xl uppercase font-semibold mb-3">
              Plan de nutrición
            </span>
            <p className="text-white text-center text-justify">
              La nutrición es una parte fundamental para alcanzar tus objetivos.
              Contamos con profesionales para ayudarte a armar un plan a tu
              medida.
            </p>
          </div>
          <div className="p-2 flex flex-col place-items-center">
            <span className="text-[#6DBFE2] text-2xl uppercase font-semibold mb-3">
              contenido exclusivo
            </span>
            <p className="text-white text-center text-justify">
              Acceso a contenidos semanales exclusivo para nuestros socios con
              tips, consejos de nutrición y videos que te ayudarán a mantenerte
              motivado y enfocado.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Beneficios;
  