import { Component } from '@angular/core';
import { PostedUser } from '../models/PostUser';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private http: ApiService) { }
  reg() {

    this.http.PostRegistration({

      phoneNumber: "574 12 90 35",
      password: "123456",
      email: "jndfbn@gmail.com",
      firstName: "shako",  
      lastName: "Giorgashvili",
      role: "user"
      }).subscribe((res:any) => 
      console.log(res)
    )

  }
}


