import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

type Props = {
  logo: JSX.Element; // ex: <div></div>
};

const HeaderHome = (props: Props) => {

  const { userLogin } = useSelector((state: any) => state.userReducer);

  const renderLogin = () => {

    if (userLogin?.accessToken) {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            hello {userLogin.email}
          </NavLink>
        </li>
        <li className="nav-item">
          <span style={{ cursor: 'pointer' }} className="nav-link" >
            Logout
          </span>

        </li>
      </>
    }

    return <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    </>

  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {props.logo}
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                HomeDemo1234
              </NavLink>
            </li>
            {renderLogin()}
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/detail">
                Detail
              </NavLink>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
