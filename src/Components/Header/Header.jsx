import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="topnav bg-black">
        <NavLink className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="home">
          Home
        </NavLink>
        <NavLink  className={({isActive}) => isActive ? 'nav-link text-dark' : 'nav-link'} to="/contact">Contact</NavLink>
        <NavLink  className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="about">About</NavLink>
        <NavLink  className={({isActive}) => isActive ? 'nav-link  bg-white text-dark' : 'nav-link'} to="/form">Form</NavLink>
        <NavLink  className={({isActive}) => isActive ? 'nav-link  bg-white text-dark' : 'nav-link'} to="/lifecycle">LifeCycle</NavLink>
        <NavLink  className={({isActive}) => isActive ? 'nav-link  bg-white text-dark' : 'nav-link'} to="/demo-redux">Demo Redux</NavLink>
      </div>
    );
  }
}
