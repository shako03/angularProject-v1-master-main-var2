import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService : AuthService){

  }
  ngOnInit(){
    if(this.authService.getIsRejected()=="rejected"){
      console.log("rejected!")
      this.throwFromOtherRoute = true

    }
  }

  throwFromOtherRoute = false


}
