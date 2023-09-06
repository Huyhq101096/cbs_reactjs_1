import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/reducers/ProductReducer";
import { Provider } from "react-redux";

// react router dom
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory, BrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";

export const history: BrowserHistory | any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
  <HistoryRouter history={history}>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route path="" index element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path="cart" index element={<Cart />}></Route>
        <Route path="profile" index element={<Profile />}></Route>
        <Route path="*" element={<Navigate to="" />}></Route>
      </Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);
