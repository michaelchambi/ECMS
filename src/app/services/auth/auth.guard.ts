import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: LoginService,
    private router: Router
  ) { }

  canActivate(): any {
    if (this.authService.loggedIn()) {
      return true;
    }
    else {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }

}