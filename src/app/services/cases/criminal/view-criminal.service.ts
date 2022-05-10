import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class ViewCriminalService {


  private crimialCasesUrl = 'http://localhost:8000/api/v1';


  constructor(private http: HttpClient, private general: GeneralService) { }

  addCriminalCases(data: any) {
    return this.http.post<any>(`${this.crimialCasesUrl}/criminal/cases`, data, {headers: this.general.userAuthorization()});
  }
  getCriminalCases(): Observable<any> {
    return this.http.get(`${this.crimialCasesUrl}/criminal/cases`, {headers: this.general.userAuthorization()});
  }
  getCriminalExtendedCases(): Observable<any> {
    return this.http.get(`${this.crimialCasesUrl}/criminal/extended-jurisdictions`, {headers: this.general.userAuthorization()});
  }
  showCriminalCases(id: any) {
    return this.http.get<any>(`${this.crimialCasesUrl}/criminal/cases/show/${id}`, {headers: this.general.userAuthorization()});
  }
  automaticCasesAssignment(id: any, data: any) {
    return this.http.post<any>(`${this.crimialCasesUrl}/criminal/${id}/auto-assignment`,data, {headers: this.general.userAuthorization()});
  }
}


