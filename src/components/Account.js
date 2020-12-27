import { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import NewCall from "./NewCall";
import Calls from "./Calls";
import About from "./About";
import Profile from "./Profile";

const Account = ({
  loggedIn,
  onLogout,
  onCallAdd,
  calls,
  isMobileMenuOpen,
  onHamburgerClick
}) => {
  const { path, url } = useRouteMatch();

  return (
    <div className="page__container page__narrow">
      <Header
        loggedIn={loggedIn}
        onLogout={onLogout}
        isMenuOpen={isMobileMenuOpen}
        onHamburgerClick={onHamburgerClick}
      />
      <main className="main">
        <Navigation url={url} isMobileOpened={isMobileMenuOpen} />
        <section className="main__content main__content_grid_new-call">
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
    </div>
  );
};

export default Account;
