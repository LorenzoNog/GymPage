import React from "react";

function PreguntasFrecuentes() {
  return (
    <>
      <div className="flex flex-col gap-8 mt-[10%] place-items-center">
        <h2 className="text-3xl font-bold text-center underline">
          Preguntas frecuentes
        </h2>
        <div className="flex flex-col gap-3 w-[50%]">
          <div className="flex flex-col gap-2">
            <span className="font-extrabold text-center">
              ¿De qué se trata la llamada gratuita?
            </span>
            <span className="text-justify">
              Ofrecemos financiación en efectivo y con tarjetas de débito y
              crédito (Ahora 12). En la llamada gratuita o contactándote con
              nuestras sucursales vas a tener más información sobre esto.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-extrabold text-center">
              Métodos de pago y financiación
            </span>
            <span className="text-justify">
              Ofrecemos financiación en efectivo y con tarjetas de débito y
              crédito (Ahora 12). En la llamada gratuita o contactándote con
              nuestras sucursales vas a tener más información sobre esto.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-extrabold text-center">
              Si no estoy contento con el servicio. ¿Puedo pedir mi dinero de
              vuelta?
            </span>
            <span className="text-justify">
              Si. Te ofrecemos garantía de devolución de tu dinero si no estás
              contento con nuestros servicios.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-extrabold text-center">
              ¿Cómo funciona el contrato de garantía de resultados?
            </span>
            <span className="text-justify">
              Nos comprometemos 100% a que tengas los resultados que buscas,
              nuestro equipo de entrenadores y nutricionistas te darán la receta
              para que consigas todo lo que te propongas en cuánto a tu salud y
              tu físico. Si al cumplir un año de entrenamiento con nuestro
              programa de Personal Training demostrás que seguiste todo el plan
              al pie de la letra y no obtuviste los resultados que esperabas, te
              devolvemos el 100% de tu dinero. Sin preguntas.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreguntasFrecuentes;