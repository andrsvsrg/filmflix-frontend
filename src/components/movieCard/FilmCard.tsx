import React, {CSSProperties} from 'react';
import {Link} from "react-router-dom";
import './style.scss'
import {IMovie} from "../../models/IMovieReponse";

interface Props {
  movie: IMovie
}

function FilmCard({movie}: Props) {
  const rating = 70
  return (
    <Link to="/film">
      <div className="h-full rounded-lg shadow-lg flex flex-col justify-between">
        <img className="w-full"
             src="https://images.gowo.su/thumbnail?width=300&url=https://eu2.contabostorage.com/dec9cf65ff654053a70854e38826abe6:gowo/films/film167532576174271516.png"
             alt="Movie Poster"/>
        <div className="p-4 flex flex-col h-full justify-between">
          <div className="title">
            <h3 className="font-bold inline-block mb-2 line-clamp-2">
              {movie.ru_title} {/* // todo long title show on hover*/}
            </h3>
          </div>

          <div className="flex flex-col justify-end">
            <span className="genre inline-block truncate overflow-hidden text-nav-noactive">Комедия, Боевик, Драмма, Мюзикл</span> {/* // todo long genre show on hover*/}
            <div className="flex justify-between items-end mt-2">
              <div className="star-rating my-auto">
                <span style={{width: `${rating}%`} as CSSProperties}></span>
              </div>
              <span className="text-nav-noactive text-lg font-bold">2021</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FilmCard;


/// ----- first example of film card

// <div className="h-[305px] w-[175px] min-w-[175px] ">
//   <div className="px-[15px] mb-6">
//     <Link to="/">
//       <img
//         className="h-[205px] rounded-[10px]"
//         src="https://images.gowo.su/thumbnail?width=330&url=https://eu2.contabostorage.com/dec9cf65ff654053a70854e38826abe6:gowo/films/film167532576174271516.png"
//         alt="film"/>
//     </Link>
//     <h5> {movie.ru_title} <br/>
//       <span className="text-nav-noactive">{'2020'}</span>
//     </h5>
//     <div className="star-rating">
//       <span style={{width: `${rating}%`} as CSSProperties}></span>
//     </div>
//     {/*<div className="rating relative h-[25px] w-[75px]">*/}
//     {/*  <div className=" w-full absolute overflow-hidden h-[100%]">*/}
//     {/*    <img src={ratingTop} className="w-[75px] h-full static border-none" alt="ratingBottom"/>*/}
//     {/*  </div>*/}
//     {/*  <div className="   absolute w-[100%] h-[100%]">*/}
//     {/*    <img src={ratingBottom}  className="w-[75px] h-auto static border-none overflow-hidden" alt="ratingTop"/>*/}
//     {/*  </div>*/}
//     {/*</div>*/}
//   </div>
// </div>