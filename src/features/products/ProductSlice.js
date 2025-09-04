import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../components/ProductGrid";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",

  //   The Button Side
  selectedCategory: "All",
};

const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchterm = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    //   The Button Side
    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;

    return matchterm && matchCategory;
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

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
      console.log(state.selectedCategory)
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
