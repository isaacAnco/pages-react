import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { AllUsers } from "./Pages/AllUsers";
import { NewUser } from "./Pages/NewUser";

export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/users" />
        </Route>
        <Route path="/users" exact>
          <AllUsers />
        </Route>
        <Route path='/new-user'>
          <NewUser />
        </Route>
      </Switch>
    </Layout>
  );
}
