import "./styles.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import ProtectedRoute from "../../hocs/ProtectedRoute";
import NewCall from "../NewCall";
import StartPage from "../StartPage";
import Register from "../Register";
import Account from "../Account";
import About from "../About";

function App() {
  // TODO -- initial state false
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    // TODO -- логика авторизации
  };

  return (

    <div className="page">
      {/* <LoginForm /> */}

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
    </div>
  );
}

export default App;
