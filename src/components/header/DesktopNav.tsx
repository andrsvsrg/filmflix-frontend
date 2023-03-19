import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

import {useAppSelector} from "../../hooks/redux";
import useAuth from "../../hooks/useAuth";

import Button from "../uiBricks/Button";
import MenuDesktop from "./MenuDesktop";




function DesktopNav() {

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const {isLoginIn: isLoginUser, userData } = useAppSelector(state => state.tokensSlice)
  const {handleLogout} = useAuth()

  console.log('isLoginUser', isLoginUser)

  function searchToggle(): void {
    setIsOpenSearch(prev => !prev)
  }

  function logoutHandler() {
    handleLogout()
    toast.success("You have successfully logged out")
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
              <p className="m-auto px-3">
                {userData.email}   {/* todo change to name or img*/}
              </p>
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