import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav
        className={`${
          open ? "h-20" : "h-12"
        } 'transition duration-300 w-full items-center text-white font-sans flex flex-col navbar p-2'`}
      >
        <button
          className={`rounded hover:bg-transparent ${
            open && "rotate-180 "
          } hover:text-black duration-500`}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`text-xl  ${
            !open && "scale-0"
          }  rounded-lg px-2 transition-all duration-300`}
        >
          <button className="text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
            <Link to="/">Home</Link>
          </button>
          <button className="text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
            <Link to="/Sabores">Sabores</Link>
          </button>
          <button className="text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
            <Link to="/embalagem">Embalagem</Link>
          </button>
          <button className="text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
            <Link to="/Contatos/:id">Contatos</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
