import React from "react";

function Informacion() {
  return (
    <div className="flex flex-col place-items-center gap-5 m-[5%]">
      <h1 className="mt-[5%] uppercase font-bold text-5xl tracking-wider">
        nuestra piscina te espera
      </h1>
      <span className="uppercase text-xl font-light">
        PARA DISFRUTAR EL VERANO AL MÁXIMO
      </span>
      <div className="flex flex-col place-items-center gap-5 mt-[5%]">
        <span className="font-bold text-xl">
          ¿Que voy a obtener al hacerme socio?
        </span>
        <span className="text-xl">
          Acceso a piscina los 7 días de la semana en una exclusiva zona de San
          Miguel de Tucumán.
        </span>
      </div>
      <div className="flex flex-col place-items-center gap-5 mt-5">
        <span className="font-bold text-xl">
          ¿Cúal es el valor mensual de la membresía?
        </span>
        <span className="text-xl">
          <span className="font-bold">Solo Piscina</span>: El valor del acceso
          es $2000 por día y $8000 por membresía mensual.
        </span>
        <span className="text-xl">
          <span className="font-bold">Solo Sauna</span>: el valor de acceso es
          $1500 por día.
        </span>
        <span className="text-xl">
          <span className="font-bold">Promo Piscina + Sauna</span>: $11500 por
          membresía mensual.
        </span>
      </div>
      <div>
        <iframe
          width="900"
          height="315"
          src="https://www.youtube.com/embed/ScgZ5TN7p50"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-xl mt-[5%] border-4 border-black"
        ></iframe>
      </div>
    </div>
  );
}

export default Informacion;
