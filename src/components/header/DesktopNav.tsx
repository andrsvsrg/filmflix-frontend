import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

import Button from "../uiBricks/Button";
import MenuDesktop from "./MenuDesktop";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logoutUser} from "../../store/reducers/TokensSlice";


function DesktopNav() {

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const isLoginUser = useAppSelector(state => state.tokensSlice.isLoginIn)
  const dispatch = useAppDispatch()
  console.log('isLoginUser', isLoginUser)
  function searchToggle(): void {
    setIsOpenSearch(prev => !prev)
  }

  function logoutHandler() {
    dispatch(logoutUser(''))
    toast.success("You have successfully logged out")
    Cookies.set('access_token', '');
    Cookies.set('refresh_token', '');
  }

  return (
    <>
      <MenuDesktop isOpenSearch={isOpenSearch}/>

      <div className="flex flex-row h-[42px] mr-0 my-auto ">
        <div onClick={searchToggle} className="mr-4 m-auto">
          <img
            src="https://gowo.su/assets/images/search_site.svg"
            alt="search_site"
            className="h-[32px]"/>
        </div>
        {
          isLoginUser
            ?
            <>
              <Button onClick={logoutHandler} className="mr-4">
                Выйти
              </Button>
            </>
            :
            <>
              <Button className="mr-4">
                <Link className="flex justify-center my-auto h-full" to="/">
                  <span className="my-auto">Войти</span>
                </Link>
              </Button>
              <Link className="my-auto" to="/">Регистрация</Link>
            </>
        }

      </div>
    </>
  );
}

export default DesktopNav;