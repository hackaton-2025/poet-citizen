import firebase from "firebase";
import { FIREBASE_CONFIG } from "../configs/firebaseConfig.js";
import formatDate from "./formatDate.js";

// TODO -- возможно когда-нибудь это стоит переделать.
// Нельзя в открытом виде хранить пароли, сообщать пользователю, что именно -- 
// email или пароль был введён неверно, хранить в localStorage сделует не id, а токен,
// и много чего ещё.
// Но в силу ограниченности по времени (это же хакатон!) полноценного бэкенда нет.

firebase.initializeApp(FIREBASE_CONFIG)

const db = firebase.database();

const deleteCard = (cardKey) => {
  db.ref("requests/" + cardKey).remove();
};

const addNewCard = ({ userId, data, status = 'На рассмотрении' }) => {
  const date = formatDate(new Date())
  return db.ref("requests/").push({
    owner: userId,
    data: data,
    status: status,
    date: date,
  });
};

const getCards = (userId) => {
  const getCardsResult = db
    .ref("requests/")
    .orderByChild("owner")
    .equalTo(userId)
    .once("value")
    .then((snapshot) => {
      let items = [];

      snapshot.forEach(childSnapshot => {
        items.push(childSnapshot.val());
      });

      return items;
    });
  return getCardsResult;
};

const getUserByEmail = (email) => {
  const checkUserResult = db
    .ref("users/")
    .orderByChild("email")
    .equalTo(email)
    .once("value");
  return checkUserResult;
}

const getUsers = () => {
  return db.ref("/users").once("value").then((snapshot) => {
    let items = [];

    snapshot.forEach((childSnapshot) => {
      items.push({ id: childSnapshot.key, data: childSnapshot.val() })
    });
    
    return items;
  });
};

const getUserById = (id) => {
  return getUsers().then((users) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new Error('Необходима авторизация')
    }

    return user;
  });
};

const registerUser = (userData) => {
  return getUserByEmail(userData.email)
    .then((data) => {
      if (data.val()) {
        throw new Error('Такой пользователь уже существует');
      } else {
        db.ref("users/").push(userData);
        return userData
      }
    }, () => {
      throw new Error('Что-то пошло не так!')
    });
};

const login = (enteredData) => {
  return getUserByEmail(enteredData.email)
    .then((data) => {
      if (!data.val()) {
        throw new Error('Пользователя с таким email не существует')
      } else {
        const userId = Object.keys(data.val())[0];
        const userData = data.val()[userId];

        if (userData.password !== enteredData.password) {
          throw new Error('Неправильный пароль');
        } else {
          delete userData.password;
          return { id: userId, userData };
        }
      }
    });
};


export default {
  deleteCard,
  addNewCard,
  getUserByEmail,
  getUserById,
  getCards,
  registerUser,
  login,
}


//ИНСТРУКЦИЯ

// import firebase from '../utils/firebaseHelper';

// const db = new FirebaseHelper();

//Проверяет, существует ли пользователь с указанным email
//Если да, то возвращает объект с информацией об этом пользователе, если нет, то регистрирует нового пользователя.
// firebase.getUser("ivan@yandex.ru").then((data) => {
//   if (data.val()) {
//     console.log("Такой пользователь уже существует");
//     const user = data.val()[Object.keys(data.val())[0]];
//     console.log(user);
//   } else {
//     console.log("такого пользователя не существует");
//     fb.registerUser({
//       fio: "Петров Пётр Петрович",
//       call: "12345678901",
//       adress: "адрес какой-то",
//       email: "почта@yandex.ru",
//       password: 123456,
//     });
//     // перебрасываем на страницу входа в личный кабинет
//   }
// });

//Добавляет новую карточку
// firebase.addNewCard({
//   email: "ivan@yandex.ru",
//   emojis: "&#128126; &#129302; &#128125;",
//   text: "Текст какого-то стихотворения",
//   status: "Не просмотрено",
//   urgency: "Срочно",
// });

//Удаляет карточку по ключу. Ключ содержится в объекте карточки в поле cardKey
// firebase.deleteCard("-MP4i_8X7asVh4x-F9tj");

//Выводит список карточек пользователя
// firebase.getCards("ivan@yandex.ru").then((data) => {
//   const arrayCards = [];
//   data.forEach(function (value) {
//     var childData = value.exportVal();
//     arrayCards.push(childData);
//   });
//   arrayCards.forEach((element) => {
//     console.log(element);
//   });
//   //если у пользователя нет карточек, то массив пустой
// });
