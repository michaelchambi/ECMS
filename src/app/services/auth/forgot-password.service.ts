import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private forgotPasswordUrl = 'http://localhost:8000/api/v1';
  private resetPasswordUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  forgotPassword(user: any) {
    return this.http.post<any>(`${this.forgotPasswordUrl}/password-verify`, user);
  }

  resetPassword(user: any) {
    console.log(user);
    return this.http.post<any>(`${this.resetPasswordUrl}/password-reset`, user);
  }
}
