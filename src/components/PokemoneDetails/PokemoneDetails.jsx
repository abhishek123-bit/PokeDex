import { useParams } from "react-router-dom";
import "./PokemoneDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetals";

function PokemoneDetails({pokemonName}) {
  const { id } = useParams();
  const { pokemonDetail, pokemonList, setpokemonList } = usePokemonDetails(id,pokemonName);

  return (
    <div className="pokemondetails-wrapper">
      <img src={pokemonDetail.image} alt="" />
      <h2>{pokemonDetail.name}</h2>
      <h2>
        Height: <span> {pokemonDetail.height}</span>
      </h2>
      <h2>
        weight: <span> {pokemonDetail.weight}</span>
      </h2>
      <div className="pokemontypes-wrapper">
        {pokemonDetail.types.map((value, index) => (
          <span
            key={index}
            onClick={() => {
              setpokemonList({
                ...pokemonList,
                pokemoneURL: `https://pokeapi.co/api/v2/type/${value.name}`,
              });
            }}
          >
            {value.name}
          </span>
        ))}
      </div>
      <div>
        {!pokemonList.isPokemoneLoading&&pokemonList.pokemonsType &&
          pokemonList.pokemonsType.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
      </div>
    </div>
  );
}

export default PokemoneDetails;
