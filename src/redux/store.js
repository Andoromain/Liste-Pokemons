import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./pokemonSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  pokemons: PokemonReducer,
});

const rootReducer = (state, action) => {
  if(action.type === "LOGIN_SUCCESS") {
    state = undefined;
    storage.removeItem("persist:root");
  }
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//sans persiste
// export const store = configureStore({
//   reducer:{
//     pokemons:PokemonReducer
//   }
// });
