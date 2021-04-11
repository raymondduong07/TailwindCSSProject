import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { getPokemon, getAllPokemon } from './services/pokemon';
import './App.css';
import { ThemeProvider } from './components/darkTheme/themeContext';


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=24";
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
    <ThemeProvider>
      <Navbar />
      <div className="">
        {loading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          <div className="dark:bg-gray-700">
            <div className="flex p-3 justify-center space-x-10">
              <button className="border-2 border-transparent bg-red-500 m-4 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500 dark:hover:text-blue-500 dark:bg-gray-800 dark:hover:border-blue-500" onClick={prev}>Prev</button>
              <button className="border-2 border-transparent bg-red-500 m-4 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500 dark:hover:text-blue-500 dark:bg-gray-800 dark:hover:border-blue-500" onClick={next}>Next</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {pokemonData.map((pokemon, species, i) => {
                return <Card key={i} pokemon={pokemon} species={species}/>;
              })}
            </div>
            <div className="flex p-3 justify-center space-x-10">
              <button className="border-2 border-transparent bg-red-500 m-4 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500 dark:hover:text-blue-500 dark:bg-gray-800 dark:hover:border-blue-500" onClick={prev}>Prev</button>
              <button className="border-2 border-transparent bg-red-500 m-4 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500 dark:hover:text-blue-500 dark:bg-gray-800 dark:hover:border-blue-500" onClick={next}>Next</button>
            </div>
          </div>
        )}
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;