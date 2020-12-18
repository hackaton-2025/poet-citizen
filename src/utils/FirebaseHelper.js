//var firebase = require("firebase/app");
//import firebase from "firebase/app";
//Юля выбери подходящий способ получения переменной firebase, я её использую для работы с базой.
//Перед этим нужно обязательно сделать npm install --save firebase

// Как пользоваться:
// const fbHelper = new FirebaseHelper(firebase);
// fbHelper.initializeApp();

// fbHelper.addNewCard({
//   email: "test@yandex.ru",
//   name: "Коды эмоджи через пробел",
//   text: "Стих",
//   status: "Не просмотрено",
//   srochnost: "Срочно",
// });
// fbHelper.getCards("test@yandex.ru");

export class FirebaseHelper {
  constructor(firebase) {
    this._config = {
      apiKey: "AIzaSyC_BhdqVU3XRCNQeXjkE1GkwfGiuSKhXE0",
      authDomain: "hackaton-yandex-praktikum.firebaseapp.com",
      databaseURL:
        "https://hackaton-yandex-praktikum-default-rtdb.firebaseio.com",
      projectId: "hackaton-yandex-praktikum",
      storageBucket: "hackaton-yandex-praktikum.appspot.com",
      messagingSenderId: "1002406482202",
      appId: "1:1002406482202:web:cd20c09f8fa000555c1ca3",
      measurementId: "G-XDKFMK8GY0",
    };
    this._firebase = firebase;
  }

  initializeApp() {
    this._firebase.initializeApp(this._config);
    this._dbRef = this._firebase.database();
  }

  addNewCard({ email, name, text, status, srochnost }) {
    const date = new Date();
    const dateStr = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}:${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
    this._dbRef.ref("requests/").push({
      name: name,
      text: text,
      status: status,
      srochnost: srochnost,
      date: dateStr,
      email: email,
    });
  }

  getCards(email) {
    const array = [];
    this._dbRef
      .ref("requests/")
      .orderByChild("email")
      .equalTo(email)
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.exportVal();
          array.push(childData);
        });
        array.reverse();
        console.log(array); //массив значений
      });
  }
}
