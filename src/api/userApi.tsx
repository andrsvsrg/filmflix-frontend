import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";
import {IErrorResponse, ILoginData, ITokens} from "../models/IResponses";
import {useAppSelector} from "../hooks/redux";


export interface IResponseUserData {
  date_joined: string,
  email: string,
}

export interface IResponseUserDataError {
  detail:   string;
  code:     string;
  messages: Message[];
}

export interface Message {
  token_class: string;
  token_type:  string;
  message:     string;
}

type IRegisterUserResponse = ITokens | IErrorResponse

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = useAppSelector((state) => state.tokensSlice.accessToken)
      if (accessToken) {
        headers.set("Authorization", `Token ${accessToken}`);
      }
      return headers;
    }
  }),

  endpoints: (builder) => ({

    registerUser: builder.mutation<IRegisterUserResponse, IUser>({
      query: (userData) => ({
        url: "/register/",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation<ITokens, ILoginData>({
      query: (loginData) => ({
        url: "/token/",
        method: "POST",
        body: loginData,
      }),
    }),
    getUserData:  builder.query<IResponseUserData | IResponseUserDataError, any>({
      query: () => ({
        url: "/users/me/",
      }),
    }),
  }),
});

export const {useRegisterUserMutation, useLoginUserMutation , useLazyGetUserDataQuery} = userApi;