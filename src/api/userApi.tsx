import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";
import {IErrorResponse, ILoginData, ITokens} from "../models/IResponses";



type IRegisterUserResponse = ITokens | IErrorResponse

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api"}),
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
  }),
});

export const {useRegisterUserMutation, useLoginUserMutation} = userApi;