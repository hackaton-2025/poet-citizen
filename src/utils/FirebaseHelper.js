import firebase from "firebase";
import { FIREBASE_CONFIG } from "../configs/firebaseConfig.js";

export class FirebaseHelper {
  constructor() {
    this._config = FIREBASE_CONFIG;
    this._firebase = firebase;
    this._firebase.initializeApp(this._config);
    this._dbRef = this._firebase.database();
  }

  deleteCard(cardKey) {
    this._dbRef.ref("requests/" + cardKey).remove();
  }

  addNewCard({ email, emojis, text, status, urgency }) {
    const cardKey = this._dbRef.ref("requests/").push().key;
    const date = new Date();
    this._dbRef.ref("requests/" + cardKey).set({
      cardKey: cardKey,
      emojis: emojis,
      text: text,
      status: status,
      urgency: urgency,
      date: date,
      email: email,
    });
  }

  getCards(email) {
    const getCardsResult = this._dbRef
      .ref("requests/")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
    return getCardsResult;
  }

  getUser(email) {
    const checkUserResult = this._dbRef
      .ref("users/")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
    return checkUserResult;
  }

  registerUser({ fio, call, adress, email, password }) {
    this._dbRef.ref("users/").push({
      fio: fio,
      call: call,
      adress: adress,
      email: email,
      password: password,
    });
  }
}

//ИНСТРУКЦИЯ

// import { FirebaseHelper } from "./../utils/FirebaseHelper.js";

// const db = new FirebaseHelper();

//Проверяет, существует ли пользователь с указанным email
//Если да, то возвращает объект с информацией об этом пользователе, если нет, то регистрирует нового пользователя.
// db.getUser("ivan@yandex.ru").then((data) => {
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
// db.addNewCard({
//   email: "ivan@yandex.ru",
//   emojis: "&#128126; &#129302; &#128125;",
//   text: "Текст какого-то стихотворения",
//   status: "Не просмотрено",
//   urgency: "Срочно",
// });

//Удаляет карточку по ключу. Ключ содержится в объекте карточки в поле cardKey
// db.deleteCard("-MP4i_8X7asVh4x-F9tj");

//Выводит список карточек пользователя
// db.getCards("ivan@yandex.ru").then((data) => {
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
