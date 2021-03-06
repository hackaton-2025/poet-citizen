
import { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import ProtectedRoute from '../hocs/ProtectedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Background from "./Background";
import StartPage from './StartPage';
import Account from './Account';
import Login from './Login';
import Register from './Register';
import firebase from '../utils/firebase';

function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    address: "",
    tel: "",
  });

  const [userCalls, setUserCalls] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const resetErrorMessage = () => {
    setErrorMessage('');
  }

  // Преобразует адрес к строковому виду. 
  // ВНИМАНИЕ: настроена под текущую валидацию.
  const getAddressStr = ({ street, house, entrance, floor, flat }) => {
    const entranceStr = entrance ? `, п. ${entrance}` : '';
    const floorStr = floor ? `, эт. ${floor}` : '';
    const flatStr = flat ? `, кв. ${flat}` : '';
    return `ул. ${street}, д. ${house}` + entranceStr + floorStr + flatStr;
  };
  
  // Проверяет, авторизован ли пользователь
  const tokenCheck = () => {
    const token = localStorage.getItem('id');

    if (token) {
      firebase.getUserById(token)
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser({
          email: userData.data.email,
          tel: userData.data.tel,
          name: userData.data.name,
          address: getAddressStr({
            street: userData.data.street,
            house: userData.data.house,
            entrance: userData.data.entrance,
            floor: userData.data.floor,
            flat: userData.data.flat,
          }),
        });
      })
      .catch((err) => console.log(err.message));
    }
  };

  // Проводит при загрузке страницы проверку, авторизован ли пользователь
  useEffect(() => {
    tokenCheck();
  }, []);
  
  const handleLogin = (data) => {
    firebase.login(data)
      .then((data) => {
        localStorage.setItem('id', data.id);
        setLoggedIn(true);
        setCurrentUser({
          email: data.userData.email,
          tel: data.userData.tel,
          name: data.userData.name,
          address: getAddressStr({
            street: data.userData.street,
            house: data.userData.house,
            entrance: data.userData.entrance,
            floor: data.userData.floor,
            flat: data.userData.flat,
          }),
        });
        history.push('/me/calls');
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };

  const handleRegister = (data) => {
    firebase.registerUser(data)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
    setLoggedIn(false);
    setCurrentUser({
      name: "",
      email: "",
      address: "",
      tel: "",
    });
    history.push('/')
  };

  const handleCallAdd = (callData) => {
    const userId = localStorage.getItem('id');
    firebase.addNewCard({
      userId: userId,
      data: callData,
    })
    .then(() => {
      getUserCalls();
    })
    .catch(err => console.log(err));
  };

  const getUserCalls = () => {
    const userId = localStorage.getItem('id');
    firebase.getCards(userId)
      .then((cards) => {
        setUserCalls(cards);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getUserCalls();
  }, [loggedIn]);

  // Для мобильного меню
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);
  const handleMobileMenuOpen = () => {
    setMobileMenuState(!isMobileMenuOpen);
  };

  const isMobile = useMediaQuery({query: "(max-width: 767px)"});

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuState(false);
    }
  }, [isMobile]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Background />
      <Switch>
        <Route path="/signin">
          <Login
            onLogin={handleLogin}
            loggedIn={loggedIn}
            errorMessage={errorMessage}
            resetErrorMessage={resetErrorMessage}
          />
        </Route>
        <Route path="/signup">
          <Register
            onRegister={handleRegister}
            errorMessage={errorMessage}
            resetErrorMessage={resetErrorMessage}
          />
        </Route>
        <ProtectedRoute
          path="/me"
          component={Account}
          loggedIn={loggedIn}
          onLogout={handleLogout}
          onCallAdd={handleCallAdd}
          calls={userCalls}
          isMobileMenuOpen={isMobileMenuOpen}
          onHamburgerClick={handleMobileMenuOpen}
        />
        <Route exact path="/">
          <StartPage
            loggedIn={loggedIn}
            onLogout={handleLogout}
            isMobile={isMobile}
            isMobileMenuOpen={isMobileMenuOpen}
            onHamburgerClick={handleMobileMenuOpen}
          />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
