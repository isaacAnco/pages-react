import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export function Navigation() {

  // const active = classes.active ?  :

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/users">logo</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/users">
              All users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/new-user'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
