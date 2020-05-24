import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import scss from "./NavBar.module.scss";

const ativeStyle = {
  color: "rgb(206, 145, 15)",
};

class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <ul className={scss.header}>
          <li className={scss.headerItem}>
            <NavLink
              className={scss.headerLink}
              to="/"
              exact
              activeStyle={ativeStyle}
            >
              Home
            </NavLink>
          </li>
          <li className={scss.headerItem}>
            <NavLink
              className={scss.headerLink}
              to="/about"
              activeStyle={ativeStyle}
            >
              About
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
