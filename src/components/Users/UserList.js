import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserItem } from "./UserItem";
import classes from "./UserList.module.css";

const sortUser = (users, ascending) => {
  return users.sort((usersA, usersB) => {
    if (ascending) {
      return usersA.id > usersB.id ? 1 : -1;
    } else {
      return usersA.id < usersB.id ? 1 : -1;
    }
  });
};

export function UserList(props) {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedUsers = sortUser(props.users, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          sort {isSortingAscending ? "Decending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedUsers.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            user={user.userName}
            name={user.name}
            email={user.email}
          />
        ))}
      </ul>
    </Fragment>
  );
}
