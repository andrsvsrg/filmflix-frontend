import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import Cookies from "js-cookie";

import {RootState} from "../store/store";

import {cookies} from "../constants/constants";

import {IUser} from "../models/IUser";
import {IErrorResponse, ILoginData, ITokens} from "../models/IResponses";
import {setAccessToken, setError, setIsLoginIn, setRefreshToken, setUserData} from "../store/reducers/TokensSlice";


export interface IRefreshError {
  "detail": string,
  "code": string
}

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

export interface ILoginError {
  data: {
    detail: string
  },
  status: number

}

type IRegisterUserResponse = ITokens | IErrorResponse

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).tokensSlice.accessToken;
      if (accessToken) {
        headers.set("Authorization", `Token ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({

    registerUser: builder.mutation<ITokens, IUser>({
      query: (userData) => ({
        url: "/register/",
        method: "POST",
        body: userData,
      }),
      transformResponse: (result: ITokens) =>
        result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log('success register request')
          setDataToStorageAndCookies(data, dispatch)
        } catch (error) {
          dispatch(setError(JSON.stringify(error)))
        }
      },
    }),
    loginUser: builder.mutation<ITokens, ILoginData | ILoginError>({
      query: (loginData) => ({
        url: "/token/",
        method: "POST",
        body: loginData,
      }),
      transformResponse: (result: ITokens) =>
        result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log('success token request')
          setDataToStorageAndCookies(data, dispatch)
        } catch (error) {
          dispatch(setError(JSON.stringify(error)))
        }
      },
    }),
    getUserData:  builder.query<IResponseUserData , any>({  // todo fix any  // | IResponseUserDataError
      query: () => ({
        url: "/users/me/",
      }),
      transformResponse: (response: IResponseUserData) =>  //  | IResponseUserDataError
        response,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log('success user/me/ request')
          dispatch(setUserData(data))
          dispatch(setIsLoginIn(true))
          dispatch(setError(null))
        } catch (error) {
          dispatch(setError(JSON.stringify(error)))
        }
      },
    }),
    refreshToken: builder.mutation<ITokens, string >({
      query: (refreshToken:string) => ({
        url: '/token_refresh/',
        method: 'POST',
        body: {'refresh':refreshToken},
      }),
      transformResponse: (response: ITokens | IRefreshError ) => {
        if ("access" in response && "refresh" in response) {
          Cookies.set(cookies.access, response.access)
          Cookies.set(cookies.refresh, response.refresh)
         } else {
          throw response as IRefreshError;
        }
        return response
      },
    }),
    verifyToken: builder.mutation<string, any>({
      query: (refreshToken:string) => ({
        url: '/token_verify/',
        method: 'POST',
        body: {'token':refreshToken}
      }),
    }),
  }),
});

export const { useRefreshTokenMutation, useVerifyTokenMutation ,useRegisterUserMutation, useLoginUserMutation , useLazyGetUserDataQuery} = userApi;



function setDataToStorageAndCookies(data: ITokens, dispatch: any) {  // todo fix any
  Cookies.set(cookies.access, data.access)
  Cookies.set(cookies.refresh, data.refresh)
  dispatch(setAccessToken(data.access))
  dispatch(setRefreshToken(data.refresh))
  dispatch(setIsLoginIn(true))
  dispatch(setError(null))
}