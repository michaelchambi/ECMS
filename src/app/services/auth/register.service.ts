import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class RegisterService {
  private registerUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(`${this.registerUrl}/register`, user);
  }
}
