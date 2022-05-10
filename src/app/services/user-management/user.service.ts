import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  GeneralService } from  '../../services/general.service';
import { Observable } from 'rxjs';
@Injectable()
export class InternalUsersService {
  private getUserslUrl = 'http://localhost:8000/api/v1/users';
  token: any;

  constructor(private http: HttpClient, private general: GeneralService) { }


  addUsers(data: any) {
    return this.http.post<any>(`${this.getUserslUrl}/create`, data, {headers: this.general.userAuthorization()});
  }
  addCourtUsers(data: any) {
    return this.http.post<any>(`${this.getUserslUrl}/officers/create`, data, {headers: this.general.userAuthorization()});
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.getUserslUrl}`, {headers: this.general.userAuthorization()});
  }

  showUsers(id: any) {
    return this.http.get<any>(`${this.getUserslUrl}/${id}/show`,{headers: this.general.userAuthorization()});
  }

  editUsers(id: any, data: any) {
    return this.http.put<any>(`${this.getUserslUrl}/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteUsers(id: any) {
    return this.http.delete<any>(`${this.getUserslUrl}/delete/${id}`, {headers: this.general.userAuthorization()});
  }
  updateUserScopes(id: any, data: any) {
    return this.http.post<any>(`${this.getUserslUrl}/${id}/scopes`,data, {headers: this.general.userAuthorization()});
  }
  updateUserSignature(profile_id: any, data: any) {
    return this.http.post<any>(`${this.getUserslUrl}/${profile_id}/signature/`,data, {headers: this.general.userAuthorization()});
  }
}
