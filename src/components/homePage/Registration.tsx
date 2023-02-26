import React, {useState} from 'react';
import Button from "../uiBricks/Button";
import {useRegisterUserMutation} from "../../api/userApi";
import {User} from "../../models/IUser";


function Registration() {

  const [first_name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [tokens, setTokens] = useState({ access: '', refresh: ''})


  const [registerUser, {isError, isLoading, isSuccess}] = useRegisterUserMutation();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const birthDay = birthday.replace(/(\d*)-(\d*)-(\d*)/,'$3/$2/$1')
    const newUser: User = { first_name, password, email, birthday:birthDay, gender};

    const response = await registerUser(newUser);  // TODO обработчик если ошибка не очищаем данные и добавляем уведомление
                                                   // TODO сохранять токены в куки
    console.log(response)
    setName('');
    setPassword('');
    setEmail('');
    setBirthDate('')
  };



  return (
    <div>
      <form onSubmit={handleSubmit} className="registration-form bg-bg-login px-4 py-5 rounded-[20px] min-w-[240px] flex flex-col h-[480px]" action="">
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
        <label className="text-[16px]"><input type="radio" value="MALE" name="gender" onChange={(e) => setGender(e.target.value)}/> <span
          className="pl-2 leading-10">Мужчина</span> </label>
        <label className="text-[16px] mb-2"><input type="radio" value="FEMALE" name="gender" onChange={(e) => setGender(e.target.value)} /> <span
          className="pl-2 leading-10">Женщина</span> </label>
        <Button type="submit" className="py-3"><span>Регистрация</span></Button>
      </form>
    </div>
  );
}

export default Registration;