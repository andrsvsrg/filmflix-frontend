import React from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logoutUser} from "../../store/reducers/TokensSlice";
import Cookies from "js-cookie";

interface Props {
  closeMenu: () => void
}


function MobileMenu({closeMenu}:Props) {

  const userAccessToken = useAppSelector(state => state.tokensSlice.accessToken)
  const dispatch = useAppDispatch()


  function logoutHandler() {
    dispatch(logoutUser(''))
    toast.success("You have successfully logged out")
    Cookies.set('access_token', '');
    Cookies.set('refresh_token', '');
    closeMenu()
  }

  return (
    <div className="fixed top-0 left-0 right-0 h-full w-full bg-under-menu">
      <div className=" w-[70%] h-full bg-bg-mb-menu py-[10px] px-5">
        <SearchInput className='pb-5 pt-5'/>
        <SearchIcon className="mb-4"/>

        <ul className="flex flex-col my-5">
          <li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors" to="/">Главная</Link>
          </li>
          <li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4"
                                      to="/">Новости</Link></li>
          {/*<li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4" to="/">Комнаты</Link></li>*/}
          <li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4"
                                      to="/films">Фильмы</Link></li>
          <li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4"
                                      to="/multfilms">Мультфильмы</Link></li>
          <li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4"
                                      to="/series">Сериалы</Link></li>
          {/*<li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4" to="/">Подписки</Link></li>*/}
          {/*<li className=" mb-5"><Link className="my-auto hover:text-nav-active transition-colors mb-4" to="/">Youtube</Link></li>*/}
        </ul>
        {
          userAccessToken
            ?
            <button onClick={logoutHandler}>
              Выйти
            </button>
            :
            <Link onClick={closeMenu} to='/'>
              Войти / Зарегестрироваться
            </Link>
        }
      </div>
    </div>

  );
}

export default MobileMenu;