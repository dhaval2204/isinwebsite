import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  companySuggestions: [],
  loading: false,
  recognition: null,
  showModal: true,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCompanySuggestions: (state, action) => {
      state.companySuggestions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRecognition: (state, action) => {
      state.recognition = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setCompanySuggestions,
  setLoading,
  setRecognition,
  setShowModal,
} = searchSlice.actions;

export default searchSlice.reducer;
