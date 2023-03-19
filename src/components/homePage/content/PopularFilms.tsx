import React from 'react';
import FilmCard from "../../movieCard/FilmCard";


function PopularFilms() {
  return (
    <div className="popularFilms pc-sm:hidden">
      <h3 className="mt-[70px] mb-3 text-center text-[24px] text-nav-noactive">Popular films</h3>
      <div className="flex gap-3 overflow-hidden p-[20px]">
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
      </div>
      <div className="h-full">
        <button
          className="text-center text-nav-noactive text-xl block m-auto border-[1px] py-1 px-4 rounded-[20px]"> Загрузить
          еще
        </button>
      </div>
    </div>
  );
}

export default PopularFilms;