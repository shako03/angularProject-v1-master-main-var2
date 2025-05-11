import { Injectable, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Ensure AuthService is imported



@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(private authService: AuthService, private route:Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.reject()

    this.route.navigateByUrl('/login');
    return false;
  }

};
