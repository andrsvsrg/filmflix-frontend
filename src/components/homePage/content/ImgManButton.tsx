import React, {FC} from 'react';
import ImgMan from "./ImgMan";
import CatalogFilmsBtn from "./CatalogFilmsBtn";

interface Props{
  className?: string
}


const  ImgManButton:FC<Props> = ({className}) => {
  const classes = className ? "man-button max-w-[50%] basis-1/2 grow-0 shrink-0 px-4 flex flex-col justify-end " + className : "man-button max-w-[50%] basis-1/2 grow-0 shrink-0 px-4 flex flex-col justify-end "  //

  return (
    <div className={classes}>
      <ImgMan className='w-[55%]'/>
      <CatalogFilmsBtn />
    </div>
  );
}

export default ImgManButton;