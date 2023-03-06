import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface TokensSlice {
  accessToken: string | null;
  refreshToken: string | null;
  userData?: IUserData
}
interface IUserData {
  email: string,
  date_joined: string,
}

const initialState: TokensSlice = {
  accessToken: null,
  refreshToken: null,
  userData: {
    email: '',
    date_joined: '',
  }
};

const TokensSlice: Slice<TokensSlice> = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setAccessToken, setRefreshToken, clearTokens, setUserData } = TokensSlice.actions;

export default TokensSlice.reducer;