import { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "../hocs/ProtectedRoute";
import StartPage from "./StartPage";
import Account from "./Account";
import About from "./About";
import Login from "./Login";
import Register from "./Register";

function App() {

  const history = useHistory();
  
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // TODO -- логика авторизации
    setLoggedIn(true);
    history.push('/me');
  };

  const handleRegister = () => {
    // TODO
    history.push('/me');
  }

  const handleLogout = () => {
    // TODO
    setLoggedIn(false);
    history.push('/')
  }

  return (
      <Switch>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <ProtectedRoute path="/me" component={Account} loggedIn={loggedIn} onLogout={handleLogout} />
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <StartPage loggedIn={loggedIn} onLogout={handleLogout} />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
  );
}

export default App;
