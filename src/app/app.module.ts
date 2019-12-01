import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {

  apiKey: "AIzaSyBCaXfxCJexycewb8VovWov01WG8UaCfDY",
  authDomain: "chat-app-33504.firebaseapp.com",
  databaseURL: "https://chat-app-33504.firebaseio.com",
  projectId: "chat-app-33504",
  storageBucket: "chat-app-33504.appspot.com",
  messagingSenderId: "137241089760",
  appId: "1:137241089760:web:d02eca5db2c1f80be22285",
  measurementId: "G-RV0DF490RE"

}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
