import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import NewCall from "./NewCall";
import Requests from "./Requests";

const Account = () => {
  const { path, url } = useRouteMatch();

  // TODO -- это временно для демонстрации
  const [isEmpty, setEmptyState] = useState (true);

  return (
    <div className="page__container page__narrow">
      <Header />
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
          <Route exact path={`${path}/`}>
            <h2>Здесь будет профиль</h2>
          </Route>
        </Switch>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
