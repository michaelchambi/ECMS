import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../services/general.service';


@Injectable()
export class CourtSubmissionsService {
  private courtSubmissionsUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addCourtSubmissions(data: any) {
    return this.http.post<any>(`${this.courtSubmissionsUrl}/court-submissions`, data, {headers: this.general.userAuthorization()});
  }

  getCourtSubmissions(): Observable<any> {
    return this.http.get(`${this.courtSubmissionsUrl}/court-submissions`, {headers: this.general.userAuthorization()});

  }

  showCourtSubmissions(id: any) {
    return this.http.get<any>(`${this.courtSubmissionsUrl}/court-submissions/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editCourtSubmissions(id: any, data: any) {
    return this.http.put<any>(`${this.courtSubmissionsUrl}/court-submissions/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteCourtSubmissions(id: any) {
    return this.http.delete<any>(`${this.courtSubmissionsUrl}/court-submissions/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
