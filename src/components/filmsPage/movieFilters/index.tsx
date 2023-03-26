import React, {useEffect, useState} from 'react';
import Filter from "./Filter";
import {useGetMoviesQuery} from "../../../api/moviesApi";
import FilmCard from "../../movieCard/FilmCard";



const catList = ['Комедия', 'Драма', 'Ужасы', 'Боевик', 'dqdq','qdqdqd','dqwdqwd', 'dqwdqwfeqfew']
interface Props {

}



const MovieFilters: React.FC<Props> = () => {

  const { data, isFetching, isError } =useGetMoviesQuery(2)
  useEffect(() => {
    console.log(data?.data)
  }, [data])

  return (
    <div className="">
      <div className="filters flex gap-4">
        <Filter variants={catList} type={'category'}/>
        <Filter variants={catList} type={'year'}/>
        <Filter variants={catList} type={'country'}/>
      </div>
      <iframe src={data?.data && data?.data[0].iframe_src} width="640" height="480" frameBorder="0" allowFullScreen></iframe>

      {
        data?.data && data?.data.map((movie) => {
          return <FilmCard key={movie.id}/>
        })
      }


    </div>
  );
};

export default MovieFilters;