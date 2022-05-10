import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../services/general.service';
@Injectable()
export class CourtsService {
  private getCourtslUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addCourts(data: any) {
    return this.http.post<any>(`${this.getCourtslUrl}/courts`, data, {headers: this.general.userAuthorization()});
  }

  getCourts(): Observable<any> {
    return this.http.get(`${this.getCourtslUrl}/courts`, {headers: this.general.userAuthorization()});

  }

  showCourts(id: any) {
    return this.http.get<any>(`${this.getCourtslUrl}/courts/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editCourts(id: any, data: any) {
    return this.http.put<any>(`${this.getCourtslUrl}/courts/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteCourts(id: any) {
    return this.http.delete<any>(`${this.getCourtslUrl}/courts/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
