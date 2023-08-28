import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UseStateDemo from './pages/Hooks/UseStateDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='useStateDemo' element={<UseStateDemo />}/>
        </Route>
      </Routes>
      
   </BrowserRouter>
);

