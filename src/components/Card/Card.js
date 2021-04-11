import React from "react";
import typeColors from "../../helpers/typeColors";

function Card({ pokemon }) {
  return (
    <div className="w-64 justify-self-center text-center rounded-md shadow-lg py-8 px-10 m-4 bg-gray-50 transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-900 dark:text-white ">
      <div className="text-right text-lg">
        <p>#{pokemon.id}</p>
      </div>
      <div className="">
        <div className="">
          <img className="block ml-auto mr-auto" src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="capitalize mb-2">{pokemon.name}</div>
        <div>
          {pokemon.types.map((type) => {
            return (
              <div
                className="capitalize rounded-md inline-block mr-2 px-2 py-1 w-auto text-center text-white"
                style={{ backgroundColor: typeColors[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
