import React from 'react';

import FilmsContent from "../components/filmsPage/FilmsContent";
import MovieFilters from "../components/filmsPage/MoviesFilters";

import {useAppSelector} from "../hooks/redux";


function FilmsPage() {
  const breakPoint = useAppSelector(state => state.breakpointReducer.breakPoint)


  return (

    <div className="container">
      {breakPoint === 's' || breakPoint === 'xs' || breakPoint === 'xxs'
        ?
        <MovieFilters isMobile={true}/>
        :
        <MovieFilters/>
      }
      <FilmsContent/>
    </div>
  );
}

export default FilmsPage;