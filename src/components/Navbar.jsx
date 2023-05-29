import scrollear from "../utils/buttonScroll.js";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row place-items-center ml-[5%] gap-[20%]" id="containerNav">
      <Link to="/">
        <img src={"/img/logo.png"} width={160} height={160} alt="logo" />
      </Link>
      <div className="flex place-items-center">
        <ul className="flex flex-row gap-8 place-items-center uppercase text-sm ">
          <li
            className="font-bold cursor-pointer hover:text-[#06858a]"
            onClick={scrollear}
          >
            Sedes
          </li>
          <li className="font-bold cursor-pointer hover:text-[#06858a]">
            <Link to="/personaltraining">Personal training</Link>
          </li>
          <li className="font-bold cursor-pointer hover:text-[#06858a]">
            <Link to="/piscina">Piscina y sauna</Link>
          </li>
        </ul>
      </div>
      <Link to='/registro'>
        <button className="bg-[#1f79a1] p-2 font-bold text-white text-sm h-fit border-2 border-[#1f79a1] hover:text-black hover:bg-white ease-in duration-100">
          Registrate
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
