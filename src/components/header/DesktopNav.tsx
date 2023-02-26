import React, {useState} from 'react';


import Button from "../uiBricks/Button";
import {Link} from "react-router-dom";
import MenuDesktop from "./MenuDesktop";

function DesktopNav() {

  const [isOpenSearch, setIsOpenSearch] = useState(false)

  function searchToggle() : void {
    setIsOpenSearch(prev => !prev)
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
        <Button className="mr-4">
          <Link className="flex justify-center my-auto h-full" to="/">
            <span className="my-auto">Войти</span>
          </Link>
        </Button>
        <Link className="my-auto" to="/">Регистрация</Link>
      </div>
    </>
  );
}

export default DesktopNav;