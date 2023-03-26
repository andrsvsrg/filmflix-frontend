import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userApi} from "../api/userApi";
import breakpointReducer from './reducers/BreakpointSlice'
import tokensSlice from "./reducers/TokensSlice";
import {moviesApi} from "../api/moviesApi";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [moviesApi.reducerPath] : moviesApi.reducer,
  breakpointReducer,
  tokensSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(moviesApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
