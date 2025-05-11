import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieservice: CookieService) { }

  isAutorised = false;

  login() {
    this.isAutorised = true;
    this.cookieservice.set('isAuth' , "1", 1);
    // this.cookieservice.set("token", "token") //როცა თოქენი გვექნება 
  }
reject(){
  this.cookieservice.set("isAuth","rejected",1)
}
  logOut() {
    this.isAutorised = false;
    this.cookieservice.delete('isAuth');
    this.cookieservice.deleteAll('isAuth');
  }

  isLoggedIn() {
    return this.isAutorised;    
  }

  isRejected(){
    return this.cookieservice.check("isAuth")
  }

  getIsRejected(){
    return this.cookieservice.get("isAuth")
  }
}
