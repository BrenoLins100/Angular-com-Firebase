import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular com Firebase';

  //declarando email para login

  email: string;
  password: string;

  constructor(public AuthService: AuthService){}

  loginWithEmail(){
    this.AuthService.loginWithEmail(this.email,this.password);
    //limpar campos ao logar
    this.email = this.password = "";
  }

  loginWithGoogle(){
    this.AuthService.loginWithGoogle();
  }

    logout(){
      this.AuthService.logout();
  }

}