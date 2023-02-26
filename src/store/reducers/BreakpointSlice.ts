import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitBreakPoint {
  breakPoint: string
}
const initialState: InitBreakPoint ={
  breakPoint: ''
}

export const BreakpointSlice = createSlice({
  name: 'breakpoint',
  initialState,
  reducers: {
     changeBreakPoint(state, action: PayloadAction<string>) {
       state.breakPoint = action.payload
     }
  }
})

export default BreakpointSlice.reducer