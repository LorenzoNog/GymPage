import React from "react";
import { Toaster, toast } from "sonner";

function Registro() {

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="flex justify-center" id="container">
      <div className="flex flex-col bg-black w-[50%] rounded-xl m-[5%] p-10">
        <form
          className="flex flex-col place-items-center gap-5 text-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-center uppercase font-semibold">
              Nombre
            </label>
            <input
              type="text"
              className="bg-black border-b-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center uppercase font-semibold">
              Apellido
            </label>
            <input
              type="text"
              className="bg-black border-b-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center uppercase font-semibold">Email</label>
            <input
              type="email"
              className="bg-black border-b-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center uppercase font-semibold">
              Contraseña
            </label>
            <input
              type="password"
              className="bg-black border-b-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center uppercase font-semibold">
              Teléfono
            </label>
            <input
              type="text"
              className="bg-black border-b-2 p-2 focus:outline-none"
            />
          </div>
          <div className="p-5">
            <Toaster />
            <button
              onClick={() =>
                toast.success("El usuario se registro con exito!")
              }
              className="text-center uppercase font-semibold bg-emerald-400 border-2 rounded-xl p-3 hover:text-black"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
