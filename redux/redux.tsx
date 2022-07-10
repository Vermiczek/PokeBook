import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    screen: 0,
    list: null,
    chosenPokemon: null,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setPokemon: (state, action) => {
      state.chosenPokemon = action.payload;
    },
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setScreen, setPokemon } = counterSlice.actions;
export const selectList = (state: any) => state.counter.list;
export const selectScreen = (state: any) => state.counter.screen;
export const selectPokemon = (state: any) => state.counter.chosenPokemon;

export default counterSlice.reducer;
