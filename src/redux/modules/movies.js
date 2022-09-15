import { instance } from "../../shared/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//전체 무비차트 조회
export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, thunkAPI) => {
    try {
      const data = await instance.get("/movies");
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//영화 상세페이지 조회
export const getDetails = createAsyncThunk(
  "details/getDetails",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/movie/${payload}`); //movie의 id를 파라미터로 보내기
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//나의 페이지 조회
export const getMypage = createAsyncThunk(
  "mypage/getMypage",
  async (_, thunkAPI) => {
    try {
      const data = await instance.get("/user/movielog");

      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//찜하기
export const onLikePost = createAsyncThunk(
  "like/onLikePost",
  async (payload, thunkApI) => {
    try {
      const data = await instance.post(`/movie/like/${payload}`);

      return data.data.data; //는 "like success"라는 상태값
    } catch (error) {
      return thunkApI.rejectWithValue(error);
    }
  }
);

export const movies = createSlice({
  name: "movies", //components로 data보내주는 extra 리듀서에 정보를 저장하기 위해 initialState를 만들어줍니다.
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
    like: {},
    mylist: {},
    error: null,
  },
  reducers: {},

  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getMovies.fulfilled]: (state, action) => {
      // console.log(action);        //엑스트라 리듀서에 액션이 성공적으로 들어왔는지 확인
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.movies = action.payload; // Store에 있는 movies에 서버에서 가져온 movies를 넣습니다.
      // console.log(state.movies);  //리듀서에 state.movies 잘 들어와있나 확인용 useSelector로 끌고가기 위해!
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [getDetails.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getDetails.fulfilled]: (state, action) => {
      // console.log(action); //엑스트라 리듀서에 액션이 성공적으로 들어왔는지 확인
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.detail = action.payload; // Store에 있는 movies에 서버에서 가져온 movies를 넣습니다.
      // console.log(state.detail);
    },
    [getDetails.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [getMypage.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getMypage.fulfilled]: (state, action) => {
      // console.log(action);        //엑스트라 리듀서에 액션이 성공적으로 들어왔는지 확인
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.mylist = action.payload; // Store에 있는 movies에 서버에서 가져온 movies를 넣습니다.
      // console.log(state.movies);
    },
    [getMypage.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [onLikePost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [onLikePost.fulfilled]: (state, action) => {
      // console.log(action); //엑스트라 리듀서에 액션이 성공적으로 들어왔는지 확인
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.like = action.payload; // Store에 있는 movies에 서버에서 가져온 movies를 넣습니다.
      // console.log(state.like);
    },
    [onLikePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
export default movies.reducer;
