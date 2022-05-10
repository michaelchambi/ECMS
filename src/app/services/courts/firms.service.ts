import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../services/general.service';

@Injectable()
export class FirmsService {
  private firmsUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addFirms(data: any) {
    return this.http.post<any>(`${this.firmsUrl}/firms/create`, data, {headers: this.general.userAuthorization()});
  }

  getFirms(): Observable<any> {
    return this.http.get(`${this.firmsUrl}/firms`, {headers: this.general.userAuthorization()});

  }

  showFirms(id: any) {
    return this.http.get<any>(`${this.firmsUrl}/firms/${id}/show`, {headers: this.general.userAuthorization()});
  }

  editFirms(id: any, data: any) {
    return this.http.put<any>(`${this.firmsUrl}/firms/${id}/edit`,data, {headers: this.general.userAuthorization()});
  }

  deleteFirms(id: any) {
    return this.http.delete<any>(`${this.firmsUrl}/firms/${id}/delete`, {headers: this.general.userAuthorization()});
  }
}
