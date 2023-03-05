import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface TokensSlice {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: TokensSlice = {
  accessToken: null,
  refreshToken: null,
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
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setAccessToken, setRefreshToken, clearTokens } = TokensSlice.actions;

export default TokensSlice.reducer;