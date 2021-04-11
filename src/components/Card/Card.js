import React, { useState } from "react";
import typeColors from "../../helpers/typeColors";
import ReactCardFlip from "react-card-flip";

function Card({ pokemon }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onClick={handleClick} className="cursor-pointer">
        <div className="h-64 w-64 justify-self-center text-center rounded-md shadow-lg py-8 px-10 m-4 mr-auto ml-auto bg-gray-50 dark:bg-gray-900 dark:text-white ">
          <div className="text-right text-lg">
            <p>#{pokemon.id}</p>
          </div>
          <div className="">
            <div className="">
              <img
                className="block ml-auto mr-auto"
                src={pokemon.sprites.front_default}
                alt=""
              />
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
      </div>
      <div onClick={handleClick} className="cursor-pointer">
        <div className="h-64 w-64 justify-self-center text-center rounded-md shadow-lg py-8 px-10 m-4 bg-gray-50 dark:bg-gray-900 dark:text-white">
          <div>Height: {pokemon.height / 10} m</div>
          <div>Weight: {pokemon.weight / 10} kg</div>
          <div className="capitalize">Ability: {pokemon.abilities[0].ability.name}</div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
