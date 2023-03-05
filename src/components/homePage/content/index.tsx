import React from 'react';
import Description from "./Description";
import {useAppSelector} from "../../../hooks/redux";
import ImgManButton from "./ImgManButton";
import PopularFilms from "./PopularFilms";
import ImgMan from "./ImgMan";
import CatalogFilmsBtn from "./CatalogFilmsBtn";
import logo from '../../../img/logo.svg'

function Content() {
  const {breakPoint} = useAppSelector(state => state.breakpointReducer)

  return (
    <>
      {
        breakPoint !== 'l' && <ImgMan className='w-full mx-auto p-4 mb-4'/>
      }
      <div className="title">
        <div className="flex items-center m-auto justify-center">
          <img className="h-[42px] mr-[25px]" src={logo}
               alt="Онлайн кинотеатр"/>
          <h1 className="text-[60px]">filmflix</h1>
        </div>
      </div>
      <span className="text-[26px] mt-[25px] block w-full text-center"> онлайн-кинотеатр для совместного просмотра фильмов </span>
      <div className="list-img flex flex-row mt-4">
        {
          breakPoint !== 'l' && <CatalogFilmsBtn className="mb-8 mt-6"/>
        }
        {
          breakPoint === 'l' && <Description/>
        }
        {
          breakPoint === 'l' && <ImgManButton/>
        }
      </div>

      {
        breakPoint === 'l' && <PopularFilms/>
      }

    </>
  );
}

export default Content;