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

  email: string = "";
  password: string = "";

  register(form: NgForm) {
    if (form.valid) {

      let user = {
        email: this.email,
        password: this.password
      }

      this.http.PostUser(user).subscribe((resp: any) => {
        this.router.navigate(['/login'])
      });
    }
  }
}

  









