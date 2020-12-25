import { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import NewCall from "./NewCall";
import Calls from "./Calls";
import About from "./About";
import Profile from "./Profile";

const Account = ({ loggedIn, onLogout, onCallAdd, calls }) => {
  const { path, url } = useRouteMatch();

  return (
    <div className="page__container page__narrow">
      <Header loggedIn={loggedIn} onLogout={onLogout} />
      <main className="main">
        <Navigation url={url} />
        <section className="main__content">
          <Switch>
            <Route path={`${path}/calls`}>
              <Calls calls={calls} />
            </Route>
            <Route path={`${path}/new-call`}>
              <NewCall onCallAdd={onCallAdd} />
            </Route>
            <Route path={`${path}/profile`}>
              <Profile />
            </Route>
            <Route path={`${path}/about`}>
              <About />
            </Route>
            <Route>
              <Redirect to={`${path}/calls`} />
            </Route>
          </Switch>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
