import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" h-20 flex flex-row justify-center bg-blue-300 text-lg">
      <ul className="flex gap-6 items-center">
        <NavLink to="/">
          <li className=" text-orange-700">Accueil</li>
        </NavLink>
        <NavLink to="/redact/publier">
          <li>Publier</li>
        </NavLink>
        <NavLink to="/moder/moderer">
          <li>Moderer</li>
        </NavLink>
        <NavLink to="/admin/administrer">
          <li>Administrer</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
