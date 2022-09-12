import { instance } from "../../shared/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (thunkAPI) => {
    try {
      const data = await instance.get("/movies");
      console.log(data.data.data.movies);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDetails = createAsyncThunk(
  "details/getDetails",
  async (thunkAPI) => {
    try {
      const data = await instance.get("/movie/TEMP");
      console.log(data);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const movies = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    detail: {
      title: "",
      titleEng: "",
      img: "",
      date: "",
      director: "",
      actor: "",
      rate: "",
      genderRate: "",
      genre: "",
      base: "",
      detail: "",
      status: 2,
    },
    error: null,
  },
  reducers: {},

  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getMovies.fulfilled]: (state, action) => {
      console.log(state);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.movies = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      console.log(state.movies);
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
  extraReducers: {
    [getDetails.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getDetails.fulfilled]: (state, action) => {
      // console.log(state);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.movies = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log(state.movies);
    },
    [getDetails.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
export default movies.reducer;
