import Cards from "./CardsSedes";

const Sedes = () => {
  return (
    <>
      <div className="mt-[8%]">
        <div className="flex font-bold text-6xl uppercase justify-center gap-[10%] tracking-widest italic">
          <span id="textStroke2">conocé</span>
          <span>nuestras</span>
          <span id="textStroke2">sedes</span>
        </div>
        <div className="flex justify-center m-[3%]">
          <span className="text-2xl tracking-wider uppercase text-white font-bold italic">
            La cadena de gimnasios más grande de tucumán
          </span>
        </div>
        <div className="p-3 mb-[5%]">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Sedes;
