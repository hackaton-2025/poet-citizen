import "./styles.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
// import Login from "./Login";
import ProtectedRoute from "../../hocs/ProtectedRoute";
import NewCall from "../NewCall.js";
import StartPage from "../StartPage";
import Account from "../Account";
import About from "../About.js";
import Login from "../Login.js";
import Register from "../Register.js";

function App() {
  // TODO -- initial state false
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    // TODO -- логика авторизации
  };

  return (
      <Switch>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <ProtectedRoute
          path="/new-call"
          component={NewCall}
          loggedIn={loggedIn}
        />
        <ProtectedRoute path="/me" component={Account} loggedIn={loggedIn} />
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <StartPage />
        </Route>
      </Switch>
  );
}

export default App;
