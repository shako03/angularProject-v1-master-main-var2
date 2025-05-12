import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private http: HotelsService) { }

  email: string = "";
  password: string = "";


  register(form: NgForm) {
    if (form.valid) {
      let user = {
        email: this.email,
        password: this.password
      }

      this.http.postUser(user).subscribe((resp:any) => {
        console.log(resp)
      })
    }
  }














  // reg() {
  //   this.http.postUser({
  //   email: "eve.holt@reqres.in",
  //   password: "pistol"

  //   }).subscribe((resp: any) => {
  //     console.log(resp)
  //   })
  // }



}




