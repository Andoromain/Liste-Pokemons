import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/Card'
import { removeFavoris } from '../../redux/pokemonSlice'

const Favoris = () => {
  const favoris = useSelector(state => state.pokemons.favoris)
  const dispatch = useDispatch();

  const handleClick = (pokemon) => {
    dispatch(removeFavoris(pokemon));
    return
  }
  console.log(favoris)
  return (
    <div className="bg-gray-100 ">
      <div className="container px-4 mx-auto sm:px-6 flex flex-wrap justify-center max-h-full">

        {
          favoris && favoris?.map((item, index) => {
            return (
              <div key={index} className='m-2'>
                <Card pokemon={item} clickButton={handleClick} labelButton="Remove Favoris" />
              </div>
            )
          })

        }
        {
          !favoris || (favoris && favoris.length === 0) && (
            <div className="grid place-content-center bg-white px-4" style={{height:'90vh'}}>
              <h1 className="uppercase tracking-widest text-gray-500">Pas de Favoris</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Favoris
