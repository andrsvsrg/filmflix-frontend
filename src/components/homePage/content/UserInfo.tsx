import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import man from '../../../img/photo_none_man.png'

function UserInfo() {
  const userData = useAppSelector(state => state.tokensSlice.userData)


  return (
    <div className="bg-bg-login px-4 py-5 rounded-[20px] flex flex-col min-h-[800px] my-auto">
      {
        <>
          <h2 className="text-[24px] mx-auto p-4">Детальная информация</h2>
          <div className="avatar w-[60%] mx-auto">
            <img src={man} alt="avatar"/>
          </div>
          <div className="name p-4">
            Имя: {userData.email}
          </div>
          <div className="email p-4">
            Email: {userData.email}
          </div>
          <div className="birthday p-4">
            Дата рождения: {userData.email}
          </div>
          <div className="gender p-4">
            Пол: {userData.email}
          </div>
          <div className="dateJoined p-4">
            Зарегестрирован: {userData.date_joined.split(' ')[0]}
          </div>
        </>
      }
    </div>
  );
}

export default UserInfo;