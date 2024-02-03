import PokemoneDetails from "../PokemoneDetails/PokemoneDetails";
import PokemoneList from "../PokemoneList/PokemoneList";
import Search from "../Search/Search";
import "./pokedex.css";
import { useState } from "react";

function Pokedex() {
  const [searchTearm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="pokedex-wrapper">
        <h1>Pokedex</h1>
        <Search setSearchTerm={setSearchTerm} />
      </div>
      {searchTearm ? (
        <PokemoneDetails key={searchTearm} pokemonName={searchTearm} />
      ) : (
        <PokemoneList />
      )}
    </div>
  );
}

export default Pokedex;
