import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  GeneralService } from  '../../services/general.service';
@Injectable()
export class ExternalRegistrationsService {

  private registerUrl = 'http://localhost:8000/api/v1/account';

  constructor(
    private http: HttpClient, private general: GeneralService,) { }

  registerAdvocate(data: any) {
    return this.http.post<any>(`${this.registerUrl}/advocate`, data, {headers: this.general.userAuthorization()});
  }

  registerAttoney(data: any) {
    return this.http.post<any>(`${this.registerUrl}/attorney`, data, {headers: this.general.userAuthorization()});
  }

  registerLitigant(data: any) {
    return this.http.post<any>(`${this.registerUrl}/litigant`, data, {headers: this.general.userAuthorization()});
  }

}
