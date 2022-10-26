import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
  currentFilter: 'All',
};

const filtersAndSearchValue = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    filterType: (state, action) => {
      state.currentFilter = action.payload;
    }
  }
});

const { actions, reducer } = filtersAndSearchValue;

export default reducer; // вытаскиваем, чтобы поместить в store

export const {
  searchValue,
  filterType,
} = actions;