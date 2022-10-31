import { instance } from "../../shared/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//영화 ,극장 , 날짜 선택하고 보내고 시간받아오기
export const getTime = createAsyncThunk(
  "booking/getTime",
  async (_data, thunkAPI) => {
    try {
      const data = await instance.post("/auth/ticket/select", _data);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//시간 보내고 예매된 좌석 받아오기
export const choiceSeat = createAsyncThunk(
  "booking/choiceSeat",
  async (seatData, thunkAPI) => {
    try {
      const data = await instance.post("/auth/ticket/seat", seatData);
      return data.data.data.seat;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//결제완료 티켓발급
export const finishPay = createAsyncThunk(
  "booking/finishPay",
  async (payData, thunkAPI) => {
    try {
      const data = await instance.post("/auth/ticket/seat/buy", payData);
      console.log(data);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const booking = createSlice({
  name: "booking",
  initialState: {
    Title: "",
    City: "강원",
    Town: "",
    Date: "",
    Time: "",
    Res: [],
    Seat: "",
    ReservedSeat: {},
    Img: "https://ifh.cc/g/qV8mw6.png",
  },

  reducers: {
    //예매 영화 선택 리듀서
    choiceMovie: (state, action) => {
      state.Title = action.payload.title;
      state.Img = action.payload.img;
    },
    //예매 극장 선택 리듀서
    choiceCinema: (state, action) => {
      state.Town = action.payload;
    },
    //예매 날짜 선택 리듀서
    choiceDate: (state, action) => {
      state.Date = action.payload;
    },
    //예매 시간 선택 리듀서
    choiceTime: (state, action) => {
      state.Time = action.payload;
    },
    //좌석 선택 저장 리듀서
    checkSeat: (state, action) => {
      state.Seat = action.payload;
    },
  },

  extraReducers: {
    [getTime.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getTime.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.Res = action.payload;
    },
    [getTime.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [choiceSeat.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [choiceSeat.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.ReservedSeat = action.payload;
      // console.log(action.payload)
    },
    [choiceSeat.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const { choiceMovie, choiceCinema, choiceDate, choiceTime, checkSeat } =
  booking.actions;
export default booking.reducer;
