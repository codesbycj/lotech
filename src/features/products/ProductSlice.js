import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../components/ProductGrid";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
};

const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchterm = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    return matchterm;
  });
};

const productSlice = createSlice({
  name: products,
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});


export const {setSearchTerm} = productSlice.actions;
export default productSlice.reducer;