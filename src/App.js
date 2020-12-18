import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './hocs/ProtectedRoute';
import NewCall from './components/NewCall';
import StartPage from './components/StartPage';
import Register from './components/Register';
import Account from './Account';
import About from './About';
// import { LoginForm } from './components/LoginForm';

function App() {
  // TODO -- initial state false
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    // TODO -- логика авторизации
  }

  return (
    <div className="App">
      {/* <LoginForm /> */}
      <Switch>
        <Route path="/signin">
          <Login
            onLogin={handleLogin}
          />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <ProtectedRoute
          path="/new-call"
          component={NewCall}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          path="/me"
          component={Account}
          loggedIn={loggedIn}
        />
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
