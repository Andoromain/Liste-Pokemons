import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Get } from "../Http";

export const fetchPokemons = createAsyncThunk("fetchPokemons", async () => {
  const response = await Get({ url: "pokemon" });

  return response?.data?.data;
});

export const fetchTypesPokemons = createAsyncThunk(
  "fetchTypesPokemons",
  async () => {
    const response = await Get({ url: "types" });

    return response?.data?.data;
  }
);

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isLoading: false,
    data: null,
    total: null,
    types: null,
    error: false,
    favoris: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavoris: (state, action) => {
        state.favoris.push(action.payload);
    },
    removeFavoris: (state, action) => {
        state.favoris = state.favoris.filter(
            (item) => item.id !== action.payload?.id
        );
        console.log(state.favoris);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.total = action.payload?.length;
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchTypesPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.types = action.payload;
      })
      .addCase(fetchTypesPokemons.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { setPokemons, setFavoris, removeFavoris } = PokemonSlice.actions;

export default PokemonSlice.reducer;
