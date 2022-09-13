import { instance } from "../../shared/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//영화 ,극장 , 날짜 선택하고 보내고 시간받아오기
export const choiceTime = createAsyncThunk(
    "booking/choiceTime",
    async (_data,thunkAPI) => {           
      try {
        const data = await instance.post("/auth/ticket/select" , _data);      
        return data.data.data
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


export const booking = createSlice({
    name: "booking",
    initialState: {
        Title :"",
        City:"강원",
        Town:"",
        Date:"",
        Res:[]
    },
      reducers: {
        //예매 영화 선택 리듀서
        choiceMovie: (state , action) => {         
            state.Title = action.payload
        },
         //예매 극장 선택 리듀서
         choiceCinema: (state , action) => {         
          state.Town = action.payload
      },
        //예매 날짜 선택 리듀서
        choiceDate: (state , action) => {         
        state.Date = action.payload
        },
      },

      extraReducers: {
        [choiceTime.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [choiceTime.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.Res = action.payload
      
         
        },
        [choiceTime.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        }
  
  }  });
  
export const { choiceMovie , choiceCinema , choiceDate } = booking.actions;
  export default booking.reducer;