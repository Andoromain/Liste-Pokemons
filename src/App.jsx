
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTE } from './config'
import { store } from "./redux/store"
import NavBar from './components/NavBar'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/lib/persistStore'

function App() {

  return (
    <>
      <BrowserRouter >
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <NavBar/>
          <Routes>
            <Route path={ROUTE.HOME} element={<Home/>} />
            <Route path={ROUTE.LISTEPOKEMON} element={<ListePokemons />} />
            <Route path={ROUTE.DETAILPOKEMON} element={<DetailPokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  )
}
import ListePokemons from './pages/Pokemon'
import { NotFound } from './pages/Errors'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import DetailPokemon from './pages/Detail'

export default App
