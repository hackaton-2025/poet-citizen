import { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../hocs/ProtectedRoute';
import StartPage from './StartPage';
import Account from './Account';
import About from './About';
import Login from './Login';
import Register from './Register';
import firebase from '../utils/firebaseHelper';

function App() {

  const history = useHistory();
  
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (data) => {
    firebase.login(data)
      .then((data) => {
        localStorage.setItem('id', data.id);
        setLoggedIn(true);
        history.push('/me');
      })
      .catch((err) => {
        // TODO -- выводить ошибку в поле для ошибки -- ждём, когда будет дизайн
        console.log(err.message);
      })
  };

  const handleRegister = (data) => {
    firebase.registerUser(data)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => {
        // TODO -- выводить ошибку в поле для ошибки -- ждём, когда будет дизайн
        console.log(err.message);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
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
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
  );
}

export default App;
