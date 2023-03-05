import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import MultfilmsPage from "./pages/MultfilmsPage";
import SeriesPage from "./pages/SeriesPage";
import Navigation from "./components/header";
import UseBreakpoint from "./hooks/useBreakpoint";
import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
const {ref} = UseBreakpoint()

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

        </Routes>
        <Footer/>
      </div>

    </>

  );
}

export default App;
