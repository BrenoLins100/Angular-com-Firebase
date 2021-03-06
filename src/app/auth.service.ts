import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  authError: any;

  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

  //logar com email
   loginWithEmail(email: string, password: string){
     let thisService = this;
     thisService.authError = null;
     this.firebaseAuth.signInWithEmailAndPassword(email,password)
     .then(value =>{
       console.log('Login com email e senha');
     }).catch(function(error){
       console.log(error.message)
       thisService.authError = error;
     });
   }

  //logar com google
   loginWithGoogle(){
     let thisService = this;
     thisService.authError = null;
     this.firebaseAuth
     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then(value =>{
       console.log('Login com Google');
     }).catch(function(error){
       console.log(error.message)
       thisService.authError = error;
     });
   }

  //sair
  logout(){
    this.firebaseAuth.signOut();
  }

}