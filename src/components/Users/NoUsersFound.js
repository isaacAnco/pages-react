import React from "react";
import { Link } from "react-router-dom";
import classes from "./NoUsersFound.module.css";

export function NoUsersFound() {
  return (
    <div className={classes.nousers}>
      <p>no users found</p>
      <Link className={classes.btn} to="/new-user">
        Add a user
      </Link>
    </div>
  );
}
