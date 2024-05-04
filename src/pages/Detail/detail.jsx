import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
    const data = useSelector(state => state.pokemons.data);
    const { id } = useParams();

    const pokemon = useMemo(() => {
        const pokemonId = parseInt(id, 10);
        return data.find((item) => item.id === pokemonId);
    }, [id, data]);

    return (
        <div className="container max-w-4xl px-4 mx-auto sm:px-6 flex justify-center ">

            <div className="flex items-center justify-center w-3/5">
                <div className="w-full p-4">
                    <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                        <div className="prod-title">
                            <p className="text-2xl font-bold text-gray-900 uppercase">
                                {pokemon?.name ?? ""}
                            </p>
                        </div>
                        <div className="prod-img justify-center">
                            <img src={pokemon.image} className="object-cover object-center w-56 mx-auto" />
                        </div>
                        <div className="grid gap-10 prod-info">
                            <div>
                                <ul className="flex flex-row items-center justify-center">
                                    {pokemon && pokemon?.apiTypes.map((type, index) => {
                                        return (

                                            <li key={index} className="mr-4 last:mr-0">
                                                <span className="block p-1 text-center transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                                                    <img src={type.image} className="justify-center block w-6 h-6 bg-blue-900 rounded-full">
                                                    </img>

                                                </span>
                                                <span>{type?.name ?? ''}</span>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                            <div class="w-full p-0 mb-2 bg-pink-100 rounded-lg dark:bg-white">
                                <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                                    <p class="flex flex-col">
                                        HP
                                        <span class="font-bold text-black dark:text-indigo-500">
                                            {pokemon?.stats?.HP ?? ""}
                                        </span>
                                    </p>
                                    <p class="flex flex-col">
                                        Attack
                                        <span class="font-bold text-black dark:text-indigo-500">
                                        {pokemon?.stats?.attack}
                                        </span>
                                    </p>
                                    <p class="flex flex-col">
                                        Defense
                                        <span class="font-bold text-black dark:text-indigo-500">
                                        {pokemon?.stats?.defense ?? ""}
                                        </span>
                                    </p>
                                    <p class="flex flex-col">
                                        Special_attack
                                        <span class="font-bold text-black dark:text-indigo-500">
                                        {pokemon?.stats?.special_attack ?? ""}
                                        </span>
                                    </p>
                                    <p class="flex flex-col">
                                    Special_defense
                                        <span class="font-bold text-black dark:text-indigo-500">
                                        {pokemon?.stats?.special_defense ?? ""}
                                        </span>
                                    </p>
                                    <p class="flex flex-col">
                                    Speed
                                        <span class="font-bold text-black dark:text-indigo-500">
                                        {pokemon?.stats?.speed ?? ""}
                                        </span>
                                    </p>
                                </div>
                            </div>
                                <div className="flex flex-col items-center justify-center text-gray-900 md:flex-row ">
                                    <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                                        Add Favoris
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
}

            export default Detail