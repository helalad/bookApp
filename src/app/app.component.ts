import { Component } from '@angular/core';
import * as firebase from 'firebase';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fireBaseAngular';

  constructor() {

    const config = {

      apiKey: 'AIzaSyB1e6x5wGZjVTIhe86L3KyNhCxFoJebIHg',

      authDomain: 'my-first-project-4024f.firebaseapp.com',

      databaseURL: 'https://my-first-project-4024f.firebaseio.com',

      projectId: 'my-first-project-4024f',

      storageBucket: 'my-first-project-4024f.appspot.com',

      messagingSenderId: '797791080048'

    };

    firebase.initializeApp(config);

  }
}
