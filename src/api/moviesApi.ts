import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MovieResponse} from "../models/IMovieReponse";
import {API_KEY_CDN} from "../constants/constants";




export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://videocdn.tv/api/'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, number>({
      query: (page = 1) => ({
        url: `movies?api_token=${API_KEY_CDN}&ordering=id&direction=desc&page=${page}`,
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