import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetFilms } from "../../features/films/Api/";
export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await apiGetFilms();
  return response.data.results;
});

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default filmsSlice.reducer;
