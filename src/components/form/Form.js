import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";
import { useInput } from "../../hook/use-input";
import { Card } from "../UI/Card";
import { LoadingSpinner } from "../UI/LoadingSpinner";
import classes from "./Form.module.css";

const validate = (value) => value.trim() !== "";
const emailValidate = (value) => value.includes("@");

export function Form(props) {
  const [isEntering, setIsEntering] = useState(false);

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput(validate);
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(validate);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(emailValidate);

  let formIsValid = false;

  if (userNameIsValid && nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddUser({
      userName,
      name,
      email,
    });
    resetUserName();
    resetemail();
    resetname();
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const userClasses = userNameHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];

  const nameClasses = nameHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];

  const emailClasses = emailHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "are you sure want to leave? all your entered data will be lost"
        }
      />
      <Card className={classes.cont}>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.group}>
            <div className={userClasses}>
              <label>User Name</label>
              <input
                type="text"
                id="user"
                value={userName}
                onChange={userNameChangeHandler}
                onBlur={userNameBlurHandler}
              />
              {userNameHasError && (
                <p className={classes.error}>
                  please entered a valid User Name
                </p>
              )}
            </div>
            <div className={nameClasses}>
              <label>full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              {nameHasError && (
                <p className={classes.error}>please entered a valid full Name</p>
              )}
            </div>
          </div>
          <div className={emailClasses}>
            <label>Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes.error}>
                please entered a valid Email address
              </p>
            )}
          </div>
          <div className={classes.btn}>
            <button onClick={finishEnteringHandler} disabled={!formIsValid}>Add</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
}
