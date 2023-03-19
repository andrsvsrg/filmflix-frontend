import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import MultfilmsPage from "./pages/MultfilmsPage";
import SeriesPage from "./pages/SeriesPage";
import Navigation from "./components/header";
import UseBreakpoint from "./hooks/useBreakpoint";
import Footer from "./components/footer";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {IResponseUserData, useLazyGetUserDataQuery} from "./api/userApi";
import {setAccessToken, setRefreshToken, setUserData} from "./store/reducers/TokensSlice";
import NotFound from "./pages/NotFound";
import Cookies from "js-cookie";
import {cookies} from "./constants/constants";


function App() {
  const {ref} = UseBreakpoint()
  const dispatch = useAppDispatch()

  const accessCookies = Cookies.get(cookies.access)
  const refreshCookies = Cookies.get(cookies.refresh)
  const [getUserData] = useLazyGetUserDataQuery();
  useEffect(() => {
    if (accessCookies && refreshCookies) {
      dispatch(setAccessToken(accessCookies))
      dispatch(setRefreshToken(refreshCookies))
      getUserData(undefined)
    }
  }, [])


  return (
    <>
      <div ref={ref}>
        <ToastContainer/>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/films' element={<FilmsPage/>}/>
          <Route path='/multfilms' element={<MultfilmsPage/>}/>
          <Route path='/series' element={<SeriesPage/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>

    </>

  );
}

export default App;
