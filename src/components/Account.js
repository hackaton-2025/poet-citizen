import { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import NewCall from "./NewCall";
import Requests from "./Requests";
import About from "./About";

const Account = ({ loggedIn, onLogout }) => {
  const { path, url } = useRouteMatch();

  // TODO -- это временно для демонстрации
  const [isEmpty, setEmptyState] = useState(true);

  return (
    <div className="page__container page__narrow">
      <Header loggedIn={loggedIn} onLogout={onLogout} />
      <main className="main">
        <Navigation url={url} />
        <section className="main__content">
          <Switch>
            <Route path={`${path}/calls`}>
              <Requests isEmpty={isEmpty} />
            </Route>
            <Route path={`${path}/new-call`}>
              <NewCall onAdd={setEmptyState} />
            </Route>
            <Route path={`${path}/profile`}>
              <h2>Здесь будет профиль</h2>
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
