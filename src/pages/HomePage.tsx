import React from 'react';
import Registration from "../components/homePage/Registration";
import Login from "../components/homePage/Login";
import Content from "../components/homePage/content";
import {useAppSelector} from "../hooks/redux";


function HomePage() {
  // const {breakPoint} = useAppSelector(store => store.breakpointReducer)
  // console.log(breakPoint)


  return (
    <div className='container'>
      <div className="content flex flex-row">
        <div className="left-column px-[15px] w-[75%] pc-sm:w-1/2">
          <Content/>
        </div>
        <div className="right-column mt-1 h-[850px] flex flex-col min-w-[240px] w-[25%] justify-between pc-sm:w-1/2">
          <Login/>
          <Registration/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;