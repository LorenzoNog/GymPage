import "../../App.css";

const WhyUs = () => {
  return (
    <div className="reasons">
      <div className="containerImg">
        <img
          src={"/img/pages/inicio/img1.png"}
          width={200}
          height={200}
          className="object-cover row-span-3 h-[80%]"
          alt="imagen"
        />
        <img
          src={"/img/pages/inicio/img4.png"}
          width={200}
          height={200}
          className="object-cover row-span-2 col-span-2 w-[400px] h-[100%]"
          alt="imagen"
        />
        <img
          src={"/img/pages/inicio/img3.png"}
          width={300}
          height={300}
          className="object-cover col-span-1 w-[200px] h-[52%]"
          alt="imagen"
        />
        <img
          src={"/img/pages/inicio/img2.png"}
          width={300}
          height={300}
          className="object-cover col-span-1 w-[190px] h-[52%]"
          alt="imagen"
        />
      </div>
      <div className="flex flex-col gap-5 p-[35px]">
        <span className="italic uppercase text-5xl font-bold tracking-widest">
          Por qué
        </span>
        <span className="italic uppercase text-5xl font-bold tracking-widest">
          elegirnos?
        </span>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex gap-2">
            <img src={"/img/pages/inicio/tilde.png"} width={25} height={20} alt="imagen" />
            <span className="text-xl text-white font-bold uppercase">
              +30 años de experiencia en el sector
            </span>
          </div>
          <div className="flex gap-2">
            <img src={"/img/pages/inicio/tilde.png"} width={25} height={20} alt="imagen"/>
            <span className="text-xl text-white font-bold uppercase">
                +6000 miembros ya confían en nosotros
            </span>
          </div>
          <div className="flex gap-2">
            <img src={"/img/pages/inicio/tilde.png"} width={25} height={20} alt="imagen" />
            <span className="text-xl text-white font-bold uppercase">
                97.3% de calificación positiva
            </span>
          </div>
          <div className="flex gap-2">
            <img src={"/img/pages/inicio/tilde.png"} width={25} height={20} alt="imagen" />
            <span className="text-xl text-white font-bold uppercase">
                100% resultados garantizados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
