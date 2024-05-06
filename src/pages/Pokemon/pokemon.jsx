import React, { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, fetchTypesPokemons } from "../../redux/pokemonSlice";
import { Filtration } from "../../components/Filtration";

export const Pokemon = () => {

    const pokemons = useSelector(state => state.pokemons.data)
    const types = useSelector(state => state.pokemons.types)
    const [selectedType, setSelectedType] = useState([]);

    const choice=[10,20,50,100]
    const [limit,setLimit]=useState(10);

    const [searchPokemon, setSearchPokemon] = useState('');
    const [filterPokemons, setFilterPokemons] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const text = e.target.value
        setSearchPokemon(e.target.value);

    }

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        const isInArray = selectedType.includes(value);

        if (isChecked && !isInArray) {
            setSelectedType([...selectedType, value]);

        } else if (!isChecked && isInArray) {
            setSelectedType(selectedType.filter((option) => option !== value));
        }

    };

    useEffect(() => {
        if (!pokemons) {
            dispatch(fetchPokemons());
        }

        if (!types) {
            dispatch(fetchTypesPokemons());
        }

        if (selectedType.length > 0 || searchPokemon.length > 0) {
            const filters = pokemons?.filter((item) => {

                const nameMatch = item?.name.toLowerCase().includes(searchPokemon.toLowerCase() ?? '') || item.apiTypes.some((type) => {
                    return type.name?.toLowerCase().includes(searchPokemon.toLowerCase())
                });
                const selectedTypeLower = selectedType.map((type) => type.toLowerCase());
                const typeMatch = selectedTypeLower.length === 0 ? true : item.apiTypes.some((type) => {
                    return selectedTypeLower.includes(type.name?.toLowerCase());
                });
                return nameMatch && typeMatch;
            });

            console.log(selectedType)

            setFilterPokemons(filters);
            console.log("mande")
        }
    }, [selectedType, searchPokemon, pokemons, types])

    return (
        <div className="bg-gray-100 ">
            <Filtration limit={limit} setLimit={setLimit} choice={choice} searchPokemon={searchPokemon} handleChange={handleChange} types={types} selectedType={selectedType} handleCheckboxChange={handleCheckboxChange} />
            <Table limit={limit} data={(selectedType.length > 0 || searchPokemon.length > 0) ? filterPokemons : pokemons} />
        </div>
    )
}

export default Pokemon;