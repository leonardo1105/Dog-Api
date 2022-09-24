import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import DogPage from "./DogPage";
import Home from './Home/index'

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dogpage" element={<DogPage/>}/>
      </Routes>
    </Router>
  )
}