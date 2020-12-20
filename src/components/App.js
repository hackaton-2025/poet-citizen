import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "../hocs/ProtectedRoute";
import StartPage from "./StartPage";
import Account from "./Account";
import About from "./About";
import Login from "./Login";
import Register from "./Register";

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
        
        <ProtectedRoute path="/me" component={Account} loggedIn={loggedIn} />
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
  );
}

export default App;
