import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LocalstrService } from '../services/localstr.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService : AuthService,private http: HotelsService,private router : Router, private local : LocalstrService){

  }
  ngOnInit(){
   if(this.authService.getIsRejected()=="reject"){
    
      this.throwFromOtherRoute = true

   }
  }

  throwFromOtherRoute = false
  

  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  role: string = "user";

 register(form : NgForm){
        if(form.valid){

          let user = {
            password: this.password,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role
          }



          this.http.LoginUser(user).subscribe((resp:any)=>{
              console.log(resp)
              this.local.setLocalStr("token", resp.token)
               this.router.navigateByUrl("/Home")
          })

          




        }
    }

  noAccount(){
    this.router.navigate(['/register'])
  }


}
