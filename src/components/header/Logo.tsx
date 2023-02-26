import React from 'react';
import logo from '../../img/logo.svg'
import {Link} from "react-router-dom";

function Logo() {
  return (
    <div className="h-full">
      <Link
        className=""
        to="/">
        <img
          src={logo}
          alt="Онлайн кинотеатр"
          className="h-[50px] p-[5px]"/>
      </Link>
    </div>
  );
}

export default Logo;