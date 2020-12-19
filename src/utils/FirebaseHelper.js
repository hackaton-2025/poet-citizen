import firebase from "firebase";
import { FIREBASE_CONFIG } from "../configs/firebaseConfig.js";
//Юля по поводу переменной с конфигурацией ты это имела ввиду?

export class FirebaseHelper {
  constructor() {
    this._config = FIREBASE_CONFIG;
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

  async getCards(email) {
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
      });
    this._cards = await array;
    return this._cards;
  }
}
