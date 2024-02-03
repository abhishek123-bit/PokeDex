
import Pokemon from "../Pokemone/Pokemone";
import "./PokemoneList.css";
import usePokemomList from "../../hooks/usePokemonList";

function PokemoneList() {
  const {pokemonList,setpokemonList}=usePokemomList("https://pokeapi.co/api/v2/pokemon",false)

  return (
    <div className="pokemoneList-wrapper">
      {pokemonList.isPokemoneLoading
        ? "Pokemon Loading.."
        : pokemonList.pokemonesDetailList.map((value, index) => (
            <Pokemon
              name={value.name}
              image={value.image}
              key={value.id}
              id={value.id}
            />
          ))}
      <button
        disabled={pokemonList.prevLink == null ? true : false}
        onClick={() => {
          setpokemonList({ ...pokemonList, pokemoneURL: pokemonList.prevLink });
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setpokemonList({ ...pokemonList, pokemoneURL: pokemonList.nextLink });
        }}
      >
        Next
      </button>
    </div>
  );
}

export default PokemoneList;
