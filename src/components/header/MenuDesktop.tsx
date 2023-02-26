import React, {FC} from 'react';
import {Link} from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchIcon from "./SearchIcon";

interface MenuProps {
  isOpenSearch: boolean
}


const MenuDesktop: FC<MenuProps> = ({isOpenSearch}) => {
  return (
    <div className="р-6 m-auto h-full ">
      {
        isOpenSearch
          ?
          <>
            <div className="w-full m-auto h-full flex" >
              <SearchIcon/>
              <SearchInput className="my-auto min-w-[345px]"/>
            </div>

          </>
          :
          <ul
            className="flex flex-row justify-center h-full gap-8 text-center text-nav-noactive ">
            <Link className="my-auto hover:text-nav-active transition-colors" to="/">Главная</Link>
            {/*<Link className="my-auto hover:text-nav-active transition-colors" to="/">Новости</Link>*/}
            {/*<Link className="my-auto hover:text-nav-active transition-colors" to="/">Комнаты</Link>*/}
            <Link className="my-auto hover:text-nav-active transition-colors" to="/films">Фильмы</Link>
            <Link className="my-auto hover:text-nav-active transition-colors" to="/multfilms">Мультфильмы</Link>
            <Link className="my-auto hover:text-nav-active transition-colors" to="/series">Сериалы</Link>
            <Link className="my-auto hover:text-nav-active transition-colors" to="/">Подписки</Link>
            {/*<Link className="my-auto hover:text-nav-active transition-colors" to="/">Youtube</Link>*/}
          </ul>
      }
    </div>
  );
}

export default MenuDesktop;