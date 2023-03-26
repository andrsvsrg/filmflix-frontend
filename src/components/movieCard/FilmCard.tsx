import React, {CSSProperties} from 'react';
import {Link} from "react-router-dom";
import './style.scss'
import ratingBottom from '../../img/rating_bot.png'
import ratingTop from '../../img/rating_top.png'

interface Props {

}

function FilmCard({}:Props) {
  const rating = 70
  return (
    <div className="h-[290px] w-[150px] min-w-[150px] ">
      <Link to="/">
        <img
          className="h-[205px] rounded-[10px]"
          src="https://images.gowo.su/thumbnail?width=330&url=https://eu2.contabostorage.com/dec9cf65ff654053a70854e38826abe6:gowo/films/film167532576174271516.png"
          alt="film"/>
      </Link>
      <h5> Астрал: Потомство <br/>
        <span className="text-nav-noactive">2022</span>
      </h5>
      <div className="star-rating">
        <span style={{width: `${rating}%`} as CSSProperties}></span>
      </div>
      {/*<div className="rating relative h-[25px] w-[75px]">*/}
      {/*  <div className=" w-full absolute overflow-hidden h-[100%]">*/}
      {/*    <img src={ratingTop} className="w-[75px] h-full static border-none" alt="ratingBottom"/>*/}
      {/*  </div>*/}
      {/*  <div className="   absolute w-[100%] h-[100%]">*/}
      {/*    <img src={ratingBottom}  className="w-[75px] h-auto static border-none overflow-hidden" alt="ratingTop"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default FilmCard;