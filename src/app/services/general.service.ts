import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  token: any;
  constructor() { }
  userAuthorization() {
    this.token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders()
    .set("Authorization", 'Bearer ' + this.token);
    return httpHeaders;
  }
}
