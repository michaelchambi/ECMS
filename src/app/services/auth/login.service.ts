import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8000/api/v1';
  token:any;
  loggedin: boolean=false;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginUser(user: any) {
    return this.http.post<any>(`${this.loginUrl}/login`, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.loggedin=true;
      return true;    }
    else{
    return false;
    }
  }

}


