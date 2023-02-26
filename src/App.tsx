import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import MultfilmsPage from "./pages/MultfilmsPage";
import SeriesPage from "./pages/SeriesPage";
import Navigation from "./components/header";
import UseBreakpoint from "./hooks/useBreakpoint";



function App() {
const {ref} = UseBreakpoint()

  return (
    <>
      <div ref={ref}>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/films' element={<FilmsPage/>}/>
          <Route path='/multfilms' element={<MultfilmsPage/>}/>
          <Route path='/series' element={<SeriesPage/>}/>
        </Routes>
      </div>

    </>

  );
}

export default App;
