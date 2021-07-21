import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components/form/Form";
import { useHttp } from "../hook/use-http";
import { addUser } from "../lib/api";

export function NewUser() {
  const { sendRequest, status } = useHttp(addUser);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("users");
    }
  }, [status, history]);

  const onAddUser = (userData) => {
    sendRequest(userData);
  };

  return <Form isLoading={status === "pending"} onAddUser={onAddUser} />;
}
