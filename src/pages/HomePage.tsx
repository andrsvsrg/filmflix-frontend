import React from 'react';

import Registration from "../components/homePage/Registration";
import Login from "../components/homePage/Login";
import Content from "../components/homePage/content";

import {useAppSelector} from "../hooks/redux";

import {getClassesLeftColm, getClassesRightColm} from "../helpers/styleHelpers";
import UserInfo from "../components/homePage/content/UserInfo";


function HomePage() {
  const breakPoint = useAppSelector(store => store.breakpointReducer.breakPoint)
  const userAccessToken = useAppSelector(state => state.tokensSlice.accessToken)
  console.log(breakPoint)
  const classesLeft =  getClassesLeftColm(breakPoint)
  const classesRight = getClassesRightColm(breakPoint)
  const classesPage = (breakPoint === 'xxs' || breakPoint === 'xs' ) ? 'flex-col' : 'flex-row'



  return (
    <div className='container'>
      <div className={"content flex " + classesPage}>
        <div className={`"left-column px-[15px] " ${classesLeft}`}>
          <Content/>
        </div>
        <div className={"right-column mt-1 h-[850px] flex flex-col min-w-[240px] justify-between "+ classesRight}>
          {
            userAccessToken ?
              <>
                <Login/>
                <Registration/>
              </>
              :
              <>
                <UserInfo/>
              </>
          }

        </div>
      </div>
    </div>
  );
}

export default HomePage;