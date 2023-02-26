import React from 'react';
import Button from "../uiBricks/Button";

function Login() {
  return (
    <div className="login-form bg-bg-login px-4 py-5 rounded-[20px] flex flex-col h-[295px]">
      <span className="text-[22px] mb-2 text-center">Авторизация</span>
      <input className=" outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-4"
             placeholder="Email *"
             type="email"/>
      <input className=" outline-0 bg-inherit pt-2 mt-[13px] w-full border-b-[1px] mb-5"
             placeholder="Пароль *"
             type="password"/>
      <Button className="py-3 mt-5"><span>Войти</span></Button>
      <span className="text-[16px] text-center mt-2">Востановить пароль</span>
    </div>
  );
}

export default Login;