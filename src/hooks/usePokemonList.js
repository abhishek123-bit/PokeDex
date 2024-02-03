import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(url, istype) {
  const [pokemonList, setpokemonList] = useState({
    pokemoneURL: "https://pokeapi.co/api/v2/pokemon",
    pokemonesDetailList: [],
    isPokemoneLoading: true,
    nextLink: null,
    prevLink: null,
    pokemonsType:[]
  });

  async function downloadList() {
    setpokemonList((list) => ({ ...list, isPokemoneLoading: true }));
    console.log(pokemonList);
    const pokemoneData = await axios.get(pokemonList.pokemoneURL);
    if (!istype) {
      let pokemoneList = pokemoneData.data.results;
      let pokemoneListURLS = pokemoneList.map((value) => axios.get(value.url));

      let pokemonesDetailList = await axios.all(pokemoneListURLS);

      let modifyPokemoneDetailsList = pokemonesDetailList.map((value) => {
        return {
          id: value.data.id,
          name: value.data.name,
          image: value.data.sprites.other.dream_world.front_default,
          type: value.data.type,
        };
      });
      console.log(modifyPokemoneDetailsList);

      setpokemonList((list) => ({
        ...list,
        pokemonesDetailList: modifyPokemoneDetailsList,
        isPokemoneLoading: false,
        nextLink: pokemoneData.data.next,
        prevLink: pokemoneData.data.previous,
      }));
    } else if(istype && !pokemonList.pokemoneURL.includes("pokemon")) {
      console.log(pokemoneData);
      const listOPokemonsType=pokemoneData.data.pokemon.map((value)=>value.pokemon.name).slice(0,5)
      setpokemonList({...pokemonList,pokemonsType:listOPokemonsType,isPokemoneLoading: false,})
    }
  }

  console.log(pokemonList.pokemonsType);

  useEffect(() => {
    downloadList();
  }, [pokemonList.pokemoneURL]);

  return { pokemonList, setpokemonList };
}

export default usePokemonList;
