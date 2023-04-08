import React, {useEffect, useState} from 'react';

import Filter from "./Filter";
import SortedBy from "./SortedBy";


const categoryList = ['Комедия', 'Драма', 'Ужасы', 'Боевик', 'dqdq','qdqdqd','dqwdqwd', 'dqwdqwfeqfew']
interface Props {
  isMobile?: boolean
}



const MovieFilters: React.FC<Props> = ({ isMobile }) => {


 const clearFilters = () : void => {
   {/* todo this button with redux store*/}
 }

  return (
    <div className="mt-10">
      {
        isMobile &&
          <div className="w-full mb-4 text-nav-noactive">
            <button className="cursor-pointer" onClick={clearFilters}>Сбросить</button>
          </div>
      }
      <div className={`filters ${isMobile ? 'grid grid-cols-2 gap-6' : 'flex flex-row gap-3'}`}>
        <div className={isMobile ? 'flex justify-end' : ''}>
          <Filter isMobile={isMobile} variants={categoryList} type={'category'} />
        </div>
        <div>
          <Filter isMobile={isMobile} variants={categoryList} type={'year'} />
        </div>
        <div className={isMobile ? 'flex justify-end' : ''}>
         <Filter isMobile={isMobile} variants={categoryList} type={'country'} />
       </div>
        <div>
          <SortedBy isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default MovieFilters;