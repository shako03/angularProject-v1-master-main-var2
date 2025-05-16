import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService : CookieService) { }

  isAuthorized = false

  login(){
    this.isAuthorized = true
    this.cookieService.set("isUath", "success", 1)
   // this.cookieService.set("token", "token", 1) // როცა თოქეი მოგვივა ლოგინზე
  }
  reject(){
    this.cookieService.set("isUath", "reject", 1)
  }
  logOut(){
    this.isAuthorized = false
    this.cookieService.delete("isUath")
    this.cookieService.deleteAll()
  }

  isLogedIn() {
    return this.isAuthorized
  }

  isRejected(){
    return this.cookieService.check("isUath")
  }

  getIsRejected(){
    return this.cookieService.get("isUath")
  }

}