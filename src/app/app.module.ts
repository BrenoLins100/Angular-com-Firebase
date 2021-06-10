import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule,

    //configurando api
    AngularFireModule.initializeApp(

      {
      apiKey: "AIzaSyC0bL5QGjAd_XXXZTIq-1GdSX9KE87TyA8",
      authDomain: "angularaulafirebase.firebaseapp.com",
      projectId: "angularaulafirebase",
      storageBucket: "angularaulafirebase.appspot.com",
      messagingSenderId: "176633883447",
      appId: "1:176633883447:web:823fe0385e75e737fdc8b2",
      measurementId: "G-2TB3PM7MF8"
    }

    ),
    AngularFireAuthModule 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
