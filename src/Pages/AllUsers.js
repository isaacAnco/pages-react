import React, { useEffect } from "react";
import { useHttp } from "../hook/use-http";
import { getAllUsers } from "../lib/api";
import { LoadingSpinner } from "../components/UI/LoadingSpinner";
import { NoUsersFound } from "../components/Users/NoUsersFound";
import { UserList } from "../components/Users/UserList";

export function AllUsers() {
  const {
    sendRequest,
    status,
    data: loadedUsers,
    error,
  } = useHttp(getAllUsers, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedUsers || loadedUsers.length === 0)) {
    return <NoUsersFound />;
  }

  return <UserList users={loadedUsers} />;
}
