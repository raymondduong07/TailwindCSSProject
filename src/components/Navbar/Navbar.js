import React from "react";
import logo from "../../pokeball.png";
import { Toggle } from "../darkTheme/toggle"

function Navbar() {
  return (
    <div className="p-5 bg-red-500 text-left text-white text-3xl dark:bg-gray-900">
      <img src={logo} alt="Logo" className="w-14 inline-block m-1"></img>
      <h1 className="inline-block">Pokedex</h1>
      <Toggle />
    </div>
  );
}

export default Navbar;
