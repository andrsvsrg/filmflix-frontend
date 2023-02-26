import React, {FC} from 'react';
import searchFilms from "../../img/search-films.svg";
import searchUsers from "../../img/search-users.svg";
import searchActors from "../../img/search-actor.svg";

interface Props {
  className?: string
}


const  SearchIcon: FC<Props> = ({className}) => {
  const classes = className ? "flex " + className : "flex"

  return (
    <div className={classes}>
      <button>
        <img className="w-[30px] mr-[10px]" src={searchFilms} alt="search films"/>
      </button>
      <button>
        <img className="w-[30px] mr-[10px]" src={searchUsers} alt="search users"/>
      </button>
      <button>
        <img className="w-[30px] mr-[10px]" src={searchActors} alt="search actors"/>
      </button>
    </div>
  );
}

export default SearchIcon;