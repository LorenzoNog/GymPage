import { Link } from "react-router-dom";

const MobileApp = () => {
  return (
    <div className="grid grid-cols-2 mt-[2%] place-items-center">
      <div className="flex flex-col p-8">
        <span className="text-5xl font-bold uppercase tracking-wider">
          <span className="border-t-[2px]">Entrená</span> donde quieras,
        </span>
        <span className="text-5xl font-bold uppercase tracking-wider">
          cuando <span className="border-b-[2px]">quieras.</span>
        </span>
        <p className="text-justify text-xl font-semibold mt-[5%]">
          Accedé a la app que creamos para que puedas vivir la experiencia
          Jockey desde donde estés. Los mejores entrenadores, clases exclusivas
          y la energía de siempre para poder seguir transformando tu vida y a tu
          medida.
        </p>
        <div className="flex flex-row">
          <Link to='https://play.google.com/store/games'>
            <img src={"/img/pages/inicio/googlestore.png"} width={300} height={300} alt="imagen"/>
          </Link>
          <Link to='https://www.apple.com/app-store/'>
            <img src={"/img/pages/inicio/appstore.png"} width={280} height={280} alt="imagen" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={"/img/pages/inicio/mobile.png"}
          width={500}
          height={500}
          className="align-top"
          alt="imagen"
        />
      </div>
    </div>
  );
};

export default MobileApp;