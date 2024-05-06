
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTE } from './config'
import { store } from "./redux/store"
import NavBar from './components/NavBar'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/lib/persistStore'
import { Suspense, lazy } from 'react'
import { NotFound } from './pages/Errors'
import { Provider } from 'react-redux'
const Home = lazy(()=>import('./pages/Home'))
const ListePokemons= lazy(()=>import('./pages/Pokemon'))
import DetailPokemon from './pages/Detail'
import Favoris from './pages/Favoris'


function App() {

  return (
    <>
      <BrowserRouter >
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <NavBar/>
          <Routes>
            <Route path={ROUTE.HOME} element={<Suspense loading={<div>Loading...</div>}><Home/></Suspense>} />
            <Route path={ROUTE.LISTEPOKEMON} element={<Suspense loading={<div>Loading...</div>}><ListePokemons /></Suspense>} />
            <Route path={ROUTE.DETAILPOKEMON} element={<DetailPokemon />} />
            <Route path={ROUTE.FAVORIS} element={<Favoris/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  )
}



export default App
