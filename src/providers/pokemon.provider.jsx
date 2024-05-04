import React from "react";
import PropTypes from 'prop-types';

const PokemonContext = React.createContext({
    pokemonInfo: [],
    setPokemonInfo: () => { },
});

export const PokemonProvider = ({ children }) => {
    const [pokemonInfo, setPokemonInfo] = React.useState([]);

    // const value = useMemo(() => ({ pokemonInfo, setPokemonInfo }), [pokemonInfo, setPokemonInfo]);

    return (
        <PokemonContext.Provider value={{pokemonInfo,setPokemonInfo}}>
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemon = () => React.useContext(PokemonContext);

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired,
};