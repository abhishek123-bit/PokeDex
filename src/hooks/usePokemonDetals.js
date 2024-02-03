import usePokemonList from "./usePokemonList";
import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id,pokemonName) {
  const [pokemonDetail, setPokemonDetail] = useState({
    name: "",
    image: "",
    types: [],
    height: "",
    weight: "",
  });

  async function downloadPokemoneDetails() {
    console.log(pokemonName);
    const searchData=pokemonName?pokemonName:id;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchData}`);
    const pokemoneData = response.data;

    const pokemone = {
      name: pokemoneData.name,
      image: pokemoneData.sprites.other.dream_world.front_default,
      types: pokemoneData.types.map((value) => value.type),
      height: pokemoneData.height,
      weight: pokemoneData.weight,
    };
    console.log(pokemone.types);
    setpokemonList({
        ...pokemonList,
        pokemoneURL: `https://pokeapi.co/api/v2/type/${(pokemone.types)[0].name}`,
    });
    setPokemonDetail(pokemone);
    console.log(pokemonList);
  }
  const { pokemonList, setpokemonList } = usePokemonList(
    `https://pokeapi.co/api/v2/type/fire`,
    true
  );

  useEffect(() => {
    downloadPokemoneDetails();
  }, []);

  return { pokemonDetail,pokemonList,setpokemonList };
}

export default usePokemonDetails;
