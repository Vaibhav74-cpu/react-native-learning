import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteMealsIds: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteMealsIds.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.favouriteMealsIds.splice(
        state.favouriteMealsIds.indexOf(action.payload.id),
        1,
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
