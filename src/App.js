import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import AssHomePage from "./Components/Navigation/AssHomePage/AssHomePage";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import ComponentWithState from "./Components/ComponentWithState/ComponentWithState";
import PhoneDetail from "./Components/Props/PhoneDetail/PhoneDetail";
import AssCart from "./Components/Props/AssCart/AssCart";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Components/Template/HomeTemplate";
import ProductManage from "./pages/DemoForm/ProductManage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/form" element={<ProductManage />}></Route>
          </Route>
          
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
