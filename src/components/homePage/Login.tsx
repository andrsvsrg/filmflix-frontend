import React, {useEffect, useState} from 'react';
import Button from "../uiBricks/Button";
import {IResponseUserData, useLazyGetUserDataQuery, useLoginUserMutation} from "../../api/userApi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAccessToken, setRefreshToken, setUserData} from "../../store/reducers/TokensSlice";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const userData = useAppSelector(state => state.tokensSlice.userData)
  const [loginUser, {isError, isSuccess, data, error, status}] = useLoginUserMutation()
  const [getUserData, { data: receivedUserData, error: errorUserData, isSuccess:isSuccessUser  }] = useLazyGetUserDataQuery();

  const dispatch = useAppDispatch()
  let popupId: any  // todo correct types
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    popupId = toast.loading("Please wait...", {closeOnClick: true})
    await loginUser({email, password})
  }
  const getUserDataF = async() => {
    await getUserData(undefined)
  }

  useEffect(() => {
    if(receivedUserData && isSuccessUser ) {
      dispatch(setUserData(receivedUserData))
    }
  }, [isSuccessUser])

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        dispatch(setAccessToken(data.access))
        dispatch(setRefreshToken(data.refresh))
        Cookies.set('access_token', data.access);
        Cookies.set('refresh_token', data.refresh);
        getUserDataF()
      }
      toast.update(popupId, {render: "successfully, You are log in 👌", type: "success", isLoading: false, autoClose: 3000});
      setEmail('')
      setPassword('')
    }
    if (isError) {
      console.log(error)
      toast.update(popupId, {render: `${JSON.stringify(error)}  🤯`, type: "error", isLoading: false,autoClose: 10000});
    }
    if(status === 'uninitialized') {
      toast.update(popupId, {render: `no server connection  🤯`, type: "error", isLoading: false, autoClose: 3000});
    }
  }, [isSuccess, isError, status])


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