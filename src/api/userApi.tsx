import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {User} from "../models/IUser";
import {Tokens} from "../models/IResponses";





export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    // getTokens: builder.query({
    //   query:() => 'token/'
    // }) ,
    registerUser: builder.mutation<Tokens, User>({
      query: (userData) => ({
        url: "/register/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;