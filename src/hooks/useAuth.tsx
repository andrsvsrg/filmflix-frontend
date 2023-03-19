import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {
  ILoginError,
  IRefreshError,
  IResponseUserDataError,
  useLazyGetUserDataQuery, useLoginUserMutation,
  useRefreshTokenMutation, useRegisterUserMutation,
  useVerifyTokenMutation,
} from '../api/userApi';
import {cookies} from '../constants/constants';
import {
  logoutUser,
  setAccessToken, setError, setIsLoginIn,
  setRefreshToken,
  setUserData,
} from '../store/reducers/TokensSlice';
import {useAppDispatch, useAppSelector} from './redux';

import {IUser} from "../models/IUser";
import {toast} from "react-toastify";
import {ILoginData} from "../models/IResponses";

const useAuth = () => {


  const dispatch = useAppDispatch();
  const {accessToken, refreshToken, isLoginIn, error} = useAppSelector((state) => state.tokensSlice);

  const [loginUser, {
    isError: isErrorLogin,
    isSuccess: isSuccessLogin,
    data: dataLogin,
    error: errorLogin,
    status: loginStatus
  }] = useLoginUserMutation()
  const [getUserData, {
    data: userData,
    isSuccess: isSuccessGetUserData,
    isError: isErrorGetUserData,
    error: getUserDataError
  }] = useLazyGetUserDataQuery();
  const [verifyToken, {
    data: dataVerify,
    status: verifyStatus,
    isError: isErrorVerify,
    error: verifyError
  }] = useVerifyTokenMutation();
  const [refreshTokens, {data: dataRefresh, error: errorRefresh, isError: isErrorRefresh}] = useRefreshTokenMutation();
  const [registerUser, {data: registerData, error: errorRegister, isError: isErrorRegister, isUninitialized: isUninitializedRegister }] = useRegisterUserMutation()


  const accessCookies = Cookies.get(cookies.access);
  const refreshCookies = Cookies.get(cookies.refresh);

  // useEffect(() => {
  //   const asyncGetUserData = async() => await getUserData(undefined)
  //   if(isSuccessLogin) {
  //     if(dataLogin) {
  //       // dispatch(setAccessToken(dataLogin.access))
  //       // dispatch(setRefreshToken(dataLogin.refresh))
  //       // console.log('success token request')
  //       // asyncGetUserData()
  //     }
  //   }else if(isErrorLogin) {
  //     dispatch(setError(errorLogin))
  //   }
  // }, [isSuccessLogin, isErrorLogin])
  //
  // useEffect(() => {
  //
  //   if(isSuccessGetUserData ) {
  //     console.log(userData)
  //       if(userData) {
  //         console.log('success user/me/ request')
  //         dispatch(setUserData(userData));
  //         dispatch(setIsLoginIn(true));
  //       }
  //   } else if(isErrorGetUserData) {
  //     dispatch(setError(getUserDataError))
  //   }
  // }, [isSuccessGetUserData, isErrorGetUserData])


  const handleLogin = async ({email, password}: ILoginData) => {
    try {
      await loginUser({email, password})
      await getUserData(undefined)    // todo  < ---i dont like it!!!
    } catch (e) {
      dispatch(setError(JSON.stringify(e)))
    }
  };

  const handlerRegister = async(userData: IUser) => {
    try {
      await registerUser(userData)
      await getUserData(undefined) // todo  < ---i dont like it!!!
    }catch (e) {
      dispatch(setError(JSON.stringify(e)))
    }
  }



  const handleLogout = () => {
    Cookies.set(cookies.access, '')
    Cookies.set(cookies.refresh, '')
    dispatch(logoutUser(''))
  };

  const handleRefresh = () => {
    if (refreshToken) {
      refreshTokens(refreshToken)
    } else if (refreshCookies) {
      refreshTokens(refreshCookies)
    } else {
      handleLogout()
    }
  };


  // useEffect(() => {
  //   const asyncGetUserData = async() => await getUserData(undefined)
  //    if(isSuccessLogin && !isErrorRegister) {
  //      try {
  //        asyncGetUserData()
  //      }catch (e) {
  //        dispatch(setError(JSON.stringify(e)))
  //      }
  //    }
  // }, [isSuccessLogin, isErrorRegister])


  // useEffect(() => {
  //   if (verifyStatus) {
  //     handleRefresh();
  //   }
  // }, [verifyStatus, handleRefresh]);

  // useEffect(() => {
  //   if (dataRefresh) {
  //     dispatch(setRefreshToken(dataRefresh.refresh));
  //     dispatch(setAccessToken(dataRefresh.access));
  //   }
  // }, [dataRefresh, dispatch]);

  // useEffect(() => {
  //   if (accessToken && refreshToken) {
  //
  //   }
  // }, [accessToken, refreshToken, getUserData]);

  // useEffect(() => {
  //   if (isSuccessGetUserData) {
  //     dispatch(setUserData(data));
  //     setIsLoggedIn(true);
  //   }
  // }, [isSuccessGetUserData, data]);

  // useEffect(() => {
  //   //   console.log(getUserDataError) /// todo set any errors in state setError()
  //   //   console.log(errorRefresh)
  //   //   console.log(verifyError)
  //   //
  //   //   // if (isError) {
  //   //   //   // Проверяем, является ли объект ошибки объектом IGetUserDataError
  //   //   //   if (getUserDataError && 'data' in getUserDataError ) {
  //   //   //   setError(getUserDataError );
  //   //   // } else if (errorRefresh) {
  //   //   //   setError(getUserDataError || errorRefresh || 'Unknown error');
  //   //   // }
  //   // }, [getUserDataError, errorRefresh, verifyError]);

  const tokens = {accessToken, refreshToken};
  const loginResult = {dataLogin, errorLogin, isErrorLogin, isSuccessLogin, loginStatus};
  const refreshResult = {dataRefresh, errorRefresh, isErrorRefresh};
  const verifyResult = {dataVerify, verifyError, verifyStatus};
  const registerResult = { registerData,  errorRegister, isErrorRegister, isUninitializedRegister}

  return {
    isLoginIn,
    error,
    tokens,
    handleLogin,
    handleLogout,
    handleRefresh,
    handlerRegister,
    registerResult,
    loginResult,
    refreshResult,
    verifyResult,
  };
};

export default useAuth;


// import React, {useEffect, useState} from 'react';
// import {useLazyGetUserDataQuery, useRefreshTokenMutation, useVerifyTokenMutation} from "../api/userApi";
// import Cookies from "js-cookie";
// import {cookies} from "../constants/constants";
// import {setAccessToken, setRefreshToken, setUserData} from "../store/reducers/TokensSlice";
// import {useAppDispatch, useAppSelector} from "./redux";
//
// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState(null);
//
//   const dispatch = useAppDispatch()
//   const {accessToken, refreshToken} = useAppSelector(state => state.tokensSlice)
//   const [getUserData, {data, isSuccess}] = useLazyGetUserDataQuery();
//   const [refreshTokens, {data: dataRefresh, error: errorRefresh}] = useRefreshTokenMutation()
//   const [verifyToken, {data: dataVerify, status: verifyStatus}] = useVerifyTokenMutation()
//   const accessCookies = Cookies.get(cookies.access)
//   const refreshCookies = Cookies.get(cookies.refresh)
//
//
//   if (accessCookies && refreshCookies) {
//     verifyToken(refreshCookies)
//   }
//
//   useEffect(() => {
//     if(verifyStatus) {
//       refreshTokens(refreshCookies)
//       return
//     }
//     Cookies.set(cookies.access, '')
//     Cookies.set(cookies.refresh,'')
//   },[verifyStatus])
//
//   useEffect(() => {
//     if(dataRefresh){
//       dispatch(setRefreshToken(dataRefresh.refresh))   // todo create setTokens actions
//       dispatch(setAccessToken(dataRefresh.access))
//     }
//   },[dataRefresh])
//
//   useEffect(() => {
//     getUserData(undefined)
//   }, [accessToken, refreshToken])
//
//   useEffect(() => {
//     if(isSuccess) {
//       dispatch(setUserData(data))
//       setIsLoggedIn(true)
//     }
//   }, [isSuccess])
//
//
//   return {isLoggedIn,error};
// };
//
// export default useAuth;

