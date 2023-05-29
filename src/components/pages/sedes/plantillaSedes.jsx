import Presentation from "./components/presentation";
import Instalaciones from "./components/instalaciones";
import HorariosDeClases from "./components/horarios";
import Beneficios from "./components/beneficio";
import { useParams } from "react-router-dom";


function PageSedes() {
  let { sedeId } = useParams()
  return (
    <>
      <Presentation sedeId={sedeId}/>
      <Instalaciones sedeId={sedeId}/>
      <HorariosDeClases sedeId={sedeId} />
      <Beneficios />
    </>
  );
}

export default PageSedes;
