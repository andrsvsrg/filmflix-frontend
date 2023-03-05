import React, {useState} from 'react';
import Button from "../uiBricks/Button";
import {useLoginUserMutation} from "../../api/userApi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAccessToken, setRefreshToken} from "../../store/reducers/TokensSlice";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginUser, {isError, isSuccess, data, error, status}] = useLoginUserMutation()

  const dispatch = useAppDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = toast.loading("Please wait...", {closeOnClick: true})
    await loginUser({email, password})
    console.log(status)
    console.log(isSuccess)
    console.log(isError)
    if (isSuccess) {
      toast.update(id, {render: "successfully, You can log in 👌", type: "success", isLoading: false, autoClose: 3000});
      if (data) {
        dispatch(setAccessToken(data.access))
        dispatch(setRefreshToken(data.refresh))
        Cookies.set('access_token', data.access);
        Cookies.set('refresh_token', data.refresh);
      }
      setEmail('')
      setPassword('')
    }
    if (isError) {
      console.log(error)
      toast.update(id, {render: `${error}  🤯`, type: "error", isLoading: false, closeButton: true});
    }
    if(status === 'uninitialized') {
      toast.update(id, {render: `no server connection  🤯`, type: "error", isLoading: false, autoClose: 3000});
    }

  }

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