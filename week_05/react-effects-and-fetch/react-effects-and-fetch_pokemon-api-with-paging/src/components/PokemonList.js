import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState();

  const [fetchAddress, setFetchAddress] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0`
  );

  console.log(pokemon);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(fetchAddress);
        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [fetchAddress]);

  function nextPage() {
    setFetchAddress(pokemon.next);
  }
  function prevPage() {
    setFetchAddress(pokemon.previous);
  }

  if (!pokemon) {
    return <p>Ich lade noch!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>; // load the loading page, hier nochmal Julian fragen
  }

  return (
    <main>
      <button
        disabled={pokemon.previous === null}
        type="button"
        onClick={prevPage}
      >
        Previous Page
      </button>
      <button type="button" onClick={nextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
