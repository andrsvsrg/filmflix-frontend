import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

function UserInfo() {
  const userData = useAppSelector(state => state.tokensSlice.userData)
  return (
    <div className="bg-bg-login px-4 py-5 rounded-[20px] flex flex-col">
      {
        <>
          <div className="avatar">
            <img src="/" alt="avatar"/>
          </div>
          <div className="email">
            {userData.email}
          </div>
          <div className="dateJoined">
            {userData.date_joined}
          </div>
        </>
      }
    </div>
  );
}

export default UserInfo;