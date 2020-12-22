import firebase from "firebase";
import { FIREBASE_CONFIG } from "../configs/firebaseConfig.js";

firebase.initializeApp(FIREBASE_CONFIG)

const db = firebase.database();

const deleteCard = (cardKey) => {
  db.ref("requests/" + cardKey).remove();
};

const addNewCard = ({ email, data, status = 'На рассмотрении' }) => {
  const cardKey = db.ref("requests/").push().key;
  const date = new Date();
  db.ref("requests/" + cardKey).set({
    cardKey: cardKey,
    email: email,
    data: data,
    status: status,
    date: date,
  });
};

const getCards = (email) => {
  const getCardsResult = db
    .ref("requests/")
    .orderByChild("email")
    .equalTo(email)
    .once("value");
  return getCardsResult;
}

const getUser = (email) => {
  const checkUserResult = db
    .ref("users/")
    .orderByChild("email")
    .equalTo(email)
    .once("value");
  return checkUserResult;
}

const registerUser = (userData) => {
  return getUser(userData.email)
    .then((data) => {
      if (data.val()) {
        throw new Error('Такой пользователь уже существует');
      } else {
        db.ref("users/").push(userData);
      }
    }, () => {
      throw new Error('Что-то пошло не так!')
    });
};


export default {
  deleteCard,
  addNewCard,
  getUser,
  getCards,
  registerUser,
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
