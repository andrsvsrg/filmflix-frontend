import React from 'react';
import {Link} from "react-router-dom";
import FilmCard from "../../FilmCard";

function Content() {


  return (
    <>
      <div className="title">
        <div className="flex items-center">
          <img className="h-[42px] mr-[25px]" src="https://gowo.su/assets/images/logo-white.svg"
               alt="Онлайн кинотеатр"/>
          <h1 className="text-[60px]">filmflix</h1>
        </div>
      </div>
      <span className="text-[26px] mt-[25px]"> онлайн-кинотеатр для совместного просмотра фильмов </span>
      <div className="list-img flex flex-row mt-4">
        <div className="max-w-[50%] basis-1/2 grow-0 shrink-0 px-4 pc-sm:hidden">
          <ul className='list-disc'>
            <li className="text-[16px] mb-4">Регистрируйтесь и находите друзей</li>
            <li className="text-[16px] mb-4">Смотрите фильмы вместе на расстоянии</li>
            <li className="text-[16px] mb-4">Общайтесь и делитесь новостями</li>
            <li className="text-[16px] mb-4">Выбирайте новинки в мире кино</li>
            <li className="text-[16px] mb-4">Создавайте комнаты для совместного просмотра фильма</li>
            <li className="text-[16px] mb-4">Делитесь впечатлениями и общайтесь во время просмотра
            </li>
          </ul>
        </div>
        <div className="man-button max-w-[50%] basis-1/2 grow-0 shrink-0 px-4 flex flex-col justify-end">
          <img className="mx-auto h-auto w-[55%]" src="https://gowo.su/assets/images/home-man.png"
               alt="man"/>
          <button className='w-[75%] m-auto'>
            <Link to="/films">Каталог фильмов</Link>
          </button>

        </div>
      </div>
      <div className="popularFilms pc-sm:hidden" >
        <h3 className="mt-[70px] mb-3 text-center text-[24px] text-nav-noactive">Popular films</h3>
        <div className="flex gap-3 overflow-hidden p-[20px]">
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
        </div>
        <div className="h-full">
          <button className="text-center text-nav-noactive text-xl block m-auto border-[1px] py-1 px-4 rounded-[20px]"> Загрузить еще</button>
        </div>
      </div>
    </>
  );
}

export default Content;