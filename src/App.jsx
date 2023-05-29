"use client";
import Inicio from "./components/inicio/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageSedes from "./components/pages/sedes/plantillaSedes";
import PersonalTraining from "./components/pages/personalTraining/personalTraining";
import PiscinaYSauna from "./components/pages/piscina/piscinaysauna";
import Registro from "./components/pages/registro";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/:id" element={<PageSedes />} />
          <Route path="/personaltraining" element={<PersonalTraining />} />
          <Route path="/piscina" element={<PiscinaYSauna />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
