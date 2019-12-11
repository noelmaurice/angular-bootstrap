import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAq9sV-NIE3s-bQoo_8yJeW11RFzeQsDlw",
      authDomain: "angular-nature.firebaseapp.com",
      databaseURL: "https://angular-nature.firebaseio.com",
      projectId: "angular-nature",
      storageBucket: "angular-nature.appspot.com",
      messagingSenderId: "950246924083",
      appId: "1:950246924083:web:ce0c5eb8807df27396a846",
      measurementId: "G-TYR0ZLB6CN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
