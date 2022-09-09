import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Home/Home';

function Routing ()
{
      return (
            <Routes>
                  <Route path='signup' element={<Signup/>} />
                  <Route path='Login' element={<Login/>} />
                  <Route path='/' element={<Home/>} />
           </Routes>
      );
}

export default Routing;