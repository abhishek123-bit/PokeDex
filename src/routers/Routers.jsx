import { Route, Routes } from "react-router-dom"
import Pokedex from "../components/Pokedex/Pokedex"
import PokemoneDetails from "../components/PokemoneDetails/PokemoneDetails"

function RouterComponent(){
    return <Routes>
    <Route path="/" element={<Pokedex/>} />
    <Route path="/pokemone/:id" element={<PokemoneDetails/>} />
    </Routes>
}

export default RouterComponent
