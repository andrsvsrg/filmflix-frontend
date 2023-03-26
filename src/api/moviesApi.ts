import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MovieResponse} from "../models/IMovieReponse";


const API_KEY = 'VRBnPfyU4yxrh8oRrryPCQT01iqk45ws'  // move to constant todo

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://videocdn.tv/api/'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, number>({
      query: (page = 1) => ({
        url: `movies?api_token=${API_KEY}&ordering=id&direction=desc&page=${page}`,
        method: 'GET',
      }),
    }),
    // getMovieById: builder.query<Movie, number>({
    //   query: (id) => ({
    //     url: `movies/${id}?api_token=${API_KEY}`,
    //     method: 'GET',
    //   }),
    // }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;