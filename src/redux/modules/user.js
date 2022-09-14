import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/api";

//미들웨어 ----------------------------------------------------------------------------------------------

//네이버 로그인     //엑스트라리듀서 안씀
export const getToken = createAsyncThunk(
  "user/getToken",
  async (code, thunkAPI) => {
    //주소창의 code 뽑아낸걸 payload로 받음
    try {
      const data = await instance.get(`?code=${code}&state=state`); //서버주소+코드정보 로 get요청을 보내면 response에 토큰을 받을수있다.
      const ACCESS_TOKEN = data.data.data;
      localStorage.setItem("token", ACCESS_TOKEN); //로컬스토리지에 토큰저장
      window.location.assign("/"); //토큰 저장하면 자동으로 메인화면으로 이동
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//카카오 로그인     //엑스트라리듀서 안씀
export const getKakao = createAsyncThunk(
  "user/getKakao",
  async (code, thunkAPI) => {
    //주소창의 code 뽑아낸걸 payload로 받음
    try {
      const data = await instance.get(`/auth/kakao?code=${code}`); //서버주소+코드정보 로 get요청을 보내면 response에 토큰을 받을수있다.
      const ACCESS_TOKEN = data.headers.authorization;
      localStorage.setItem("token", ACCESS_TOKEN); //로컬스토리지에 토큰저장
      window.location.assign("/"); //토큰 저장하면 자동으로 메인화면으로 이동
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// //유저 로그아웃
// export const _logout = createAsyncThunk(
//   "users/logout",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await instance.get("/auth/logout");
//       console.log(data);
//       localStorage.removeItem("token");
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

//리듀서 -----------------------------------------------------------------------------------------------------
export const user = createSlice({
  name: "user",
  initialState: {
    is_Login: "false",
    error: null,
  },
  reducers: {
    //로그인상태확인 리듀서
    loginCheck: (state) => {
      //app.js에서 뭔가실행될때마다 항상 로컬스토리지에 토큰이 있나 없나보고 state의 is_Login상태를 바꿔줌
      state.is_Login = true;
    },
  },
});

export const { loginCheck } = user.actions;
export default user.reducer;
