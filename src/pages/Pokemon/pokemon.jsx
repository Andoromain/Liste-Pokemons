import React, { useEffect } from "react";
import { Table } from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/pokemonSlice";

export const Pokemon = () => {

    const pokemons = useSelector(state => state.pokemons.data)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pokemons) {
            dispatch(fetchPokemons());
        }
        console.log(pokemons)
    }, [pokemons])

    return (
        <div className="bg-gray-100 ">
            <Table data={pokemons} />
        </div>
    )
}

export default Pokemon;