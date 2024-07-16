import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Login';
import Regester from './Regester';
import DashBoard from './Components/DashBoard';

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Register' element={<Regester/>}/>
            <Route path='/Dashboard' element={<DashBoard/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router
