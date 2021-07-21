import React from "react";

import classes from "./UserItem.module.css";

export function UserItem(props) {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p> {props.user}</p>
        </blockquote>
        <figcaption>FullName: {props.name}</figcaption>
        <figcaption>EmailAddress: {props.email}</figcaption>
      </figure>
    </li>
  );
}
