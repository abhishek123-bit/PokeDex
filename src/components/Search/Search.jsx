import { useState } from "react";
import "./Search.css";
import useDeboucing from "../../hooks/useDebouncing";
function Search({setSearchTerm}) {
  const debouceCallback=useDeboucing((e)=>setSearchTerm(e.target.value))
  return (
    <>
      <input placeholder="Enter Pokemone Name..." className="search"
        onChange={debouceCallback}
       />
    </>
  );
}

export default Search;
