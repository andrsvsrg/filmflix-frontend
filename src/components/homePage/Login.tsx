import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

import Button from "../uiBricks/Button";

import { useLoginUserMutation} from "../../api/userApi";
import {useAppDispatch} from "../../hooks/redux";
import {setAccessToken, setRefreshToken} from "../../store/reducers/TokensSlice";
import {cookies} from "../../constants/constants";
import useAuth from "../../hooks/useAuth";


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {handleLogin, loginResult: { isErrorLogin, isSuccessLogin, dataLogin, errorLogin, loginStatus}} = useAuth()

  const toastId = 'toastId';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.loading("Please wait...", {closeOnClick: true, toastId: toastId})
    await handleLogin({email, password})
  }


  useEffect(() => {

    if (isSuccessLogin) {
      setEmail('')
      setPassword('')
      toast.update(toastId, {
        render: "successfully, You are log in 👌",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });

    }
    if (isErrorLogin) {


      toast.update(toastId, {
        render: `${JSON.stringify(errorLogin)}  🤯`,   // todo  show massage - errorLogin.data.detailed  TS error
        type: "error",
        isLoading: false,
        autoClose: 10000
      });
    }
    if (loginStatus === 'uninitialized') {
      toast.update(toastId, {render: `no server connection  🤯`, type: "error", isLoading: false, autoClose: 3000});
    }
  }, [ isErrorLogin, isSuccessLogin, loginStatus])


  return (
    <div className="login-form bg-bg-login px-4 py-5 rounded-[20px] flex flex-col h-[295px]">
      <span className="text-[22px] mb-2 text-center">Авторизация</span>
      <form onSubmit={handleSubmit} action="">
        <input className=" outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-4"
               placeholder="Email *"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <input className=" outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-5"
               placeholder="Пароль *"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="py-3 mt-5 mx-auto w-full"><span>Войти</span></Button>
      </form>
      <span className="text-[16px] text-center mt-2">Восстановить пароль</span>
    </div>
  );
}

export default Login;





















//
// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   toast.loading("Please wait...", {closeOnClick: true, toastId: toastId})
//   await loginUser({email, password})
// }
//
//
// useEffect(() => {
//   if (isSuccess) {
//     if (data) {
//       dispatch(setAccessToken(data.access))
//       dispatch(setRefreshToken(data.refresh))
//       Cookies.set(cookies.access, data.access);
//       Cookies.set(cookies.refresh, data.refresh);
//     }
//     setEmail('')
//     setPassword('')
//     toast.update(toastId, {
//       render: "successfully, You are log in 👌",
//       type: "success",
//       isLoading: false,
//       autoClose: 3000
//     });
//
//   }
//   if (isError) {
//     console.log(error)
//     toast.update(toastId, {
//       render: `${JSON.stringify(error)}  🤯`,
//       type: "error",
//       isLoading: false,
//       autoClose: 10000
//     });
//   }
//   if (status === 'uninitialized') {
//     toast.update(toastId, {render: `no server connection  🤯`, type: "error", isLoading: false, autoClose: 3000});
//   }
// }, [isSuccess, isError, status])