const QueIncluye = () => {
    return (
      <>
        <div className="flex flex-col gap-5 p-5 place-items-center mb-[5%]">
          <h1 className="text-4xl uppercase font-bold text-center italic mt-[5%] p-5">
            <span className="border-t-2">El Jockey</span> Gym personal{" "}
            <span className="border-b-2">training incluye</span>:
          </h1>
          <div className="flex flex-row mt-5 gap-10">
            <div className="flex flex-col text-xl">
              <li>Consultas con nutricionistas.</li>
              <li>Sesiones de Coaching.</li>
              <li>Entrenamiento con profesores de ed. física.</li>
              <li>Acceso gratuito al desafío grupal «Reto 12 Semanas»</li>
            </div>
            <div className="flex flex-col text-xl">
              <li>Contenido educativo:</li>
              <li>Videos</li>
              <li>Ebooks</li>
              <li>Dietas</li>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default QueIncluye;
  