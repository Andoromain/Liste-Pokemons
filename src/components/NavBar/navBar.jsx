import React from "react";
import Icon from '../../assets/react.svg'
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {

    const location = useLocation();

    return (

        <div>
            <nav className="bg-white dark:bg-gray-800  ">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="w-8 h-8" src={Icon} alt="Workflow" />
                            </a>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <Link className={`${location.pathname === "/"?"text-gray-800 dark:text-white":"text-gray-300"}   hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`} to="/">
                                        Home
                                    </Link>
                                    <Link className={`${location.pathname === "/pokemons"?"text-gray-800 dark:text-white":"text-gray-300"}   hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`} to="/pokemons">
                                        Pokemons
                                    </Link>
                                    <Link className={`${location.pathname === "/favoris"?"text-gray-800 dark:text-white":"text-gray-300"}   hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`} to="/favoris">
                                        Favoris
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="flex items-center ml-4 md:ml-6">
                            </div>
                        </div>
                        <div className="flex -mr-2 md:hidden">
                            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link className={`${location.pathname === "/"?"text-gray-800 dark:text-white": 'text-gray-300 hover:text-gray-800 dark:hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`} to="/">
                            Home
                        </Link>
                        <Link className={`${location.pathname === "/pokemons"?"text-gray-800 dark:text-white": 'text-gray-300 hover:text-gray-800 dark:hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`} to="/pokemons">
                            Pokemons
                        </Link>
                        <Link className={`${location.pathname === "/favoris"?"text-gray-800 dark:text-white": 'text-gray-300 hover:text-gray-800 dark:hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`} to="/favoris">
                            Favoris
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar