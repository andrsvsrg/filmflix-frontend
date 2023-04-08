import React, {CSSProperties} from 'react';
import {useGetMoviesQuery} from "../api/moviesApi";
import {Link} from "react-router-dom";

const WatchingFilmPage = () => {

  // const { data, isFetching, isError } =useGetMoviesQuery(2)
  const rating = 50
  const url = '//64.annacdn.cc/KNiFZ1t3JKN1/tv-series/4135?episode=3&season=1&start_time=15&poster=https://i.pinimg.com/474x/77/8a/b1/778ab1e2fdfd430ec484edc66f6f4e2f.jpg'
  console.log(url)
  return (
    <div className="container ">
      <div className="flex flex-col h-full w-full m-auto  rounded-md">

        <div className="film-info bg-white p-10 ">
          <h1 className="text-4xl font-bold text-black mb-6">Военный моряк</h1>
          <div className="flex flex-row ">
            <img
              src="https://i.pinimg.com/474x/77/8a/b1/778ab1e2fdfd430ec484edc66f6f4e2f.jpg"
              alt="Poster"
              className="w-1/4 object-contain rounded-md shadow-lg mr-6"
            />
            <div className="w-1/2">
              <div className="flex flex-row items-center mb-2">
                <span className="text-black text-lg mr-4">2023</span>
                <span className="text-black text-lg mr-4">|</span>
                <span className="text-black text-lg mr-4">16+</span>
                <span className="text-black text-lg mr-4">|</span>
                <span className="text-black text-lg mr-4">1 сезон</span>
              </div>
              <Link to="/" className="block text-black text-lg hover:underline mb-4">
                Скандинавские сериалы
              </Link>
              <div className="star-rating my-auto" style={{zIndex:5}}>
                <span style={{width: `${rating}%`} as CSSProperties}></span>
              </div>
              <div className="my-4 text-lg text-black">
                <span className="text-nav-noactive">Жaнp:</span> тpиллep, дpaмa, кpиминaл, дeтeктив
              </div>
              <div className="mb-4">
                <span className="text-nav-noactive mr-2">В ролях:</span>
                <span className="text-black text-lg">Кристоффер Йонер, Ине Марие Вильман, Пол Сверре Хаген</span>
              </div>
              <p className="text-white text-lg mb-4 text-black">
                <span className="text-nav-noactive">Описание:</span> В начале Второй мировой войны два моряка норвежского
                торгового судна оказываются в зоне боевых действий. Преодолевая суровые испытания, они пытаются выжить любой
                ценой.
              </p>
            </div>
          </div>
        </div>



        <div className="w-[90%] h-[700px] m-auto p-6 mt-6">
          <div className="iframe-wrapper h-full">
            <iframe src={url} className="w-full h-full" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchingFilmPage;