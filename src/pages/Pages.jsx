import React from "react";
import Home from "./Home";
import {Route,Routes,/* BrowserRouter */} from 'react-router-dom'
import Cuisines from "./Cuisines";
import Searched from "./Searched";
import Search from "../components/Search";
import Recipe from "./Recipe";
function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/cuisine/:type" element={<Cuisines/>}/>
     {/*  here in the above route the :type is used so that the url can be adjusted on the basis of selection of routing subaddress */}
     <Route path="/searched/:search" element={<Searched/>}/>
     <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
  )
}

export default Pages