import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface TokensSlice {
  accessToken: string | null;
  refreshToken: string | null;
  isLoginIn: boolean,
  error: string | null;
  userData: IUserData
}
interface IUserData {
  email: string,
  date_joined: string,
}

const initialState: TokensSlice = {
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoginIn: false,
  userData: {
    email: '',
    date_joined: '',
  }
};

const TokensSlice: Slice<TokensSlice> = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setIsLoginIn: (state, action: PayloadAction<boolean>) => {
      state.isLoginIn = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload
    },
    logoutUser: (state) => {
      state.accessToken = null
      state.refreshToken = null
      state.isLoginIn = false
      state.userData = {
        email: '',
        date_joined: '',
      }
    },
  },
});

export const {logoutUser, setAccessToken, setRefreshToken, setUserData, setError, setIsLoginIn } = TokensSlice.actions;

export default TokensSlice.reducer;