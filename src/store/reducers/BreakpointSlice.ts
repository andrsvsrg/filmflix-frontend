import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IBreakPoint {
  breakPoint: 'xxs' | 'xs' | 's' | 'm' | 'l'
}
const initialState: IBreakPoint ={
  breakPoint: 'l'
}

export const BreakpointSlice = createSlice({
  name: "breakpoint",
  initialState,
  reducers: {
    changeBreakPoint: (state, action: PayloadAction<IBreakPoint['breakPoint']>) => {
      state.breakPoint = action.payload;
    },
  },
});

export default BreakpointSlice.reducer