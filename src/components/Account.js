import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import NewCall from "./NewCall";
import Requests from "./Requests";

const Account = () => {
  const { path, url } = useRouteMatch();

  // TODO -- это временно для демонстрации
  const [isEmpty, setEmptyState] = useState (true);

  return (
    <div className="page__narrow page__full-height">
      <Header />
      <main className="page__container">
        <Navigation url={url} />
        <section className="page__content">
        <Switch>
          <Route path={`${path}/calls`}>
            <Requests isEmpty={isEmpty} />
          </Route>
          <Route path={`${path}/new-call`}>
            <NewCall onAdd={setEmptyState} />
          </Route>
          <Route exact path={`${path}/`}>
            <h2>Здесь будет профиль</h2>
          </Route>
        </Switch>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default Account;


{/* <ProtectedRoute
          path="/new-call"
          component={NewCall}
          loggedIn={loggedIn}
        /> */}