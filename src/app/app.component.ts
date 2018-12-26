import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyB_YcgbMXOm-Gg3PWLbZido-tBVSAREbKE",
      authDomain: "angular-bookslivre.firebaseapp.com",
      databaseURL: "https://angular-bookslivre.firebaseio.com",
      projectId: "angular-bookslivre",
      storageBucket: "angular-bookslivre.appspot.com",
      messagingSenderId: "46197096729"
    };
    firebase.initializeApp(config);
  }
}
