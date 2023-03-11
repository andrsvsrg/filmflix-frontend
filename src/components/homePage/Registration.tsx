import React, {useEffect, useState} from 'react';
import Button from "../uiBricks/Button";
import {useRegisterUserMutation} from "../../api/userApi";
import {IUser} from "../../models/IUser";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import TokensSlice, {setAccessToken, setRefreshToken} from "../../store/reducers/TokensSlice";


function Registration() {

  const [first_name, setName] = useState('')    // todo all in one useState {..}
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthDate] = useState('')
  const [gender, setGender] = useState('')


  // const {accessToken, refreshToken} = useAppSelector(state => state.tokensSlice)
  // const dispatch = useAppDispatch()

  const [registerUser, {isError, error, isSuccess, data, status}]  = useRegisterUserMutation();

  const toastId = 'toastId';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.loading("Please wait...", {closeOnClick: true,  toastId: toastId})

    const birthDay = birthday.replace(/(\d*)-(\d*)-(\d*)/, '$3/$2/$1')
    const newUser: IUser = {first_name, password, email, birthday: birthDay, gender};

    await registerUser(newUser);
  };

  useEffect(() => {
    if (isError) {
      let errorText
      if (data) {
        if ('error' in data) {
          errorText = data.error.join(', ')
        }
      }

      if (!errorText) errorText = 'registration error'
      toast.update(toastId, {render: `${errorText}  🤯`, type: "error", isLoading: false, autoClose: 10000,  className: 'rotateY animated'});
    }

    if (isSuccess) {
      toast.update(toastId, {render: "successfully, You can log in 👌", type: "success", isLoading: false, autoClose: 3000, className: 'rotateX animated'});
      // if (data) {
      //   if ('access' in data) {
      //     dispatch(setAccessToken(data.access))
      //     dispatch(setRefreshToken(data.refresh))
      //     Cookies.set('access_token', data.access);
      //     Cookies.set('refresh_token', data.refresh);
      //   }
      // }
      setName('');
      setPassword('');
      setEmail('');
      setBirthDate('')
    }

    if (status === 'uninitialized') {
      toast.update(toastId, {render: `no server connection  🤯`, type: "error", isLoading: false, autoClose: 3000, className: 'rotateY animated'});
    }
  }, [isSuccess, isError, status])


  return (
    <div>
      <form onSubmit={handleSubmit}
            className="registration-form bg-bg-login px-4 py-5 rounded-[20px] min-w-[240px] flex flex-col h-[480px]"
            action="">
        <span className="text-[22px] mb-2 text-center">Регистрация</span>
        <input className="outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-5"
               placeholder="Имя *"
               type="text"
               value={first_name}
               onChange={(e) => setName(e.target.value)}
        />
        <input className="outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-5"
               placeholder="E-mail *"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <input className="outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-5"
               placeholder="Пароль *"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
        />
        <input className="outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-5 mb-3"
               placeholder="Дата Вашего рождения *"
               type="date"
               value={birthday}
               onChange={(e) => setBirthDate(e.target.value)}
        />
        <label className="text-[16px]"><input type="radio" value="MALE" name="gender"
                                              onChange={(e) => setGender(e.target.value)}/> <span
          className="pl-2 leading-10">Мужчина</span> </label>
        <label className="text-[16px] mb-2"><input type="radio" value="FEMALE" name="gender"
                                                   onChange={(e) => setGender(e.target.value)}/> <span
          className="pl-2 leading-10">Женщина</span> </label>
        <Button type="submit" className="py-3"><span>Регистрация</span></Button>
      </form>
    </div>
  );
}

export default Registration;