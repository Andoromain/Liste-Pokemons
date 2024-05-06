import  { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setFavoris, removeFavoris } from "../../redux/pokemonSlice";
import {ROUTE} from "../../config"

const Detail = () => {
    const data = useSelector(state => state.pokemons.data);
    const favoris = useSelector(state=>state.pokemons.favoris);
    const dispatch = useDispatch();

    const { id } = useParams();
    const navigate = useNavigate();

    const pokemon = useMemo(() => {
        const pokemonId = parseInt(id, 10);
        return data?.find((item) => item?.id === pokemonId);
    }, [id, data]);

    const isFavoris=useMemo(()=>{
        return favoris?.find((item)=>item?.id === pokemon?.id);
    },[favoris])

    const handleClick = (e)=>{
        e.preventDefault();
        if(isFavoris){
            dispatch(removeFavoris(pokemon));
            return
        }
        dispatch(setFavoris(pokemon));
    }

    useEffect(() => {
        if (!data || !pokemon) {
            navigate(ROUTE.LISTEPOKEMON);
        }
    },[data, pokemon])

    return (
        <div className="bg-gray-100 ">

            <div className="container max-w-4xl px-4 mx-auto sm:px-6 flex justify-center ">

                <div className="flex items-center justify-center w-3/5">
                    <div className="w-full p-4">
                        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">

                            <div className="prod-title">
                                <button className="p-2 text-white bg-blue-500 rounded-full" onClick={() => { navigate(-1) }}>
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                        </path>
                                    </svg>
                                </button>
                                <p className="text-2xl font-bold text-gray-900 uppercase">
                                    {pokemon?.name ?? ""}
                                </p>
                            </div>
                            <div className="prod-img justify-center">
                                <img src={pokemon?.image} alt={pokemon?.name ?? "image"} className="object-cover object-center w-56 mx-auto" />
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
                                <div className="w-full p-0 mb-2 bg-pink-100 rounded-lg dark:bg-white">
                                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                                        <p className="flex flex-col">
                                            HP
                                            <span className="font-bold text-black dark:text-indigo-500">
                                                {pokemon?.stats?.HP ?? ""}
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            Attack
                                            <span className="font-bold text-black dark:text-indigo-500">
                                                {pokemon?.stats?.attack}
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            Defense
                                            <span className="font-bold text-black dark:text-indigo-500">
                                                {pokemon?.stats?.defense ?? ""}
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            Special_attack
                                            <span className="font-bold text-black dark:text-indigo-500">
                                                {pokemon?.stats?.special_attack ?? ""}
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            Special_defense
                                            <span className="font-bold text-black dark:text-indigo-500">
                                                {pokemon?.stats?.special_defense ?? ""}
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            Speed
                                            <span className="font-bold text-black dark:text-indigo-500">
                                                {pokemon?.stats?.speed ?? ""}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center text-gray-900 md:flex-row ">
                                    <button onClick={handleClick} type="button" className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                                       { isFavoris?"Remove Favoris" :"Add Favoris"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Detail