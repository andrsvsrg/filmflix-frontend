import React, {useEffect, useState} from 'react';
import FilmCard from "../movieCard/FilmCard";
import {useGetMoviesQuery} from "../../api/moviesApi";
import useScrollToBottom from "../../hooks/useScrollToBottom";

interface Props {

}

const FilmsContent: React.FC<Props> = () =>  {
  const [pageNumber, setPageNumber] = useState(1)
  const [films, setFilms] = useState([])
  const { data, isFetching, isError } =useGetMoviesQuery(2)
  useEffect(() => {
    console.log(data?.data)

  }, [data])

  const loadMore = () => {
    console.log('load more')
  }

  useScrollToBottom(loadMore)

  return (
    <div className="mt-[50px]">
      <div className="mx-auto ">
        <h2 className="text-[36px] mb-3">Фильмы</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {/*<iframe src={data?.data && data?.data[0].iframe_src} width="640" height="480" allowFullScreen></iframe>*/}

        {
          data?.data && data?.data.map((movie) => {
            return <FilmCard movie={movie} key={movie.id}/>
          })
        }
        </div>
      </div>
    </div>
  );
}

export default FilmsContent;