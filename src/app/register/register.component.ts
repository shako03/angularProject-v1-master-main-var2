import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  constructor(private http: HotelsService,private router : Router) { }
 
  phoneNumber: string = "";
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  role: string = "user";
 
 
  register(form : NgForm){
       
        if(form.valid){
 
          let user = {
            phoneNumber :  this.phoneNumber,
            password: this.password,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role
          }
 
 
          this.http.PostUser(user).subscribe((resp:any)=>{
              this.router.navigateByUrl("/login")
          })
 
 
 
 
        }
    }
}









