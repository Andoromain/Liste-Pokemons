import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Get } from '../Http';

export const fetchPokemons = createAsyncThunk("fetchPokemons", async () => {
    const response = await Get({url: "pokemon"});

    return response?.data?.data;
});

export const fetchTypesPokemons = createAsyncThunk("fetchTypesPokemons", async ()=> {
    const response = await Get({url : "types"});

    return response?.data?.data;
})

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        isLoading: false,
        data:null,
        types:null,
        error:false
    },
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPokemons.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchPokemons.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchPokemons.rejected,(state)=>{
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchTypesPokemons.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.types = action.payload;
        })
        .addCase(fetchTypesPokemons.rejected,(state)=>{
            state.error = true;
        })

    }
});

export const { setPokemons } = PokemonSlice.actions;

export default PokemonSlice.reducer;