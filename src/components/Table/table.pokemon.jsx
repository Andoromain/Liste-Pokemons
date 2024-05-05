import React,{useEffect, useState} from "react";
import Liste from "../Liste";
import { Link } from "react-router-dom";
import { Pagination } from "../Pagintion";

export const Table = (props) => {

    const { data } = props
    const [page, setPage] = useState(1);
    const limit = 25;
    const total=data.length

    const indexOfLastPokemon = page * limit;
    const indexOfFirstPokemon = indexOfLastPokemon - limit;
    const currentData = data.slice(indexOfFirstPokemon, indexOfLastPokemon);
    
    const handlePageChanged = (page) => {
        setPage(page);
    };

    return (

        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
            <div className="py-8">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="grid" style={{overflow:"auto"}}>
                    <Pagination total={total}  limit={50} handlePageChanged={handlePageChanged}/>
                    </div>
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">

                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Pokémon
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Type
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Attack
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        HP
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData && currentData?.map((pokemon,index) => {

                                    const styleHP=pokemon?.stats?.HP>49?"":"";

                                    return (
                                        <tr key={`${index}te${pokemon.id}`}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <a href="#" className="relative block">
                                                            <img alt="profil" src={pokemon.image } className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                        </a>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                           {pokemon.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    <Liste data={pokemon.apiTypes}/>
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {pokemon?.stats?.attack}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                    <span aria-hidden="true" className={`absolute inset-0 ${pokemon?.stats?.HP<49?'bg-red-400':'bg-green-200'} rounded-full opacity-50`}>
                                                    </span>
                                                    <span className="relative">
                                                        {pokemon?.stats?.HP}
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <Link to={`/pokemon/${pokemon.id}`} className="text-indigo-600 hover:text-indigo-900">
                                                    Détail
                                                </Link>
                                            </td>
                                        </tr>
                                    )

                                })
                                }

                            </tbody>
                        </table>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}