import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class CivilViewService {

    private civilCasesUrl = 'http://localhost:8000/api/v1';
    constructor(private http: HttpClient, private general: GeneralService) { }
  
    addCivilCases(data: any) {
      return this.http.post<any>(`${this.civilCasesUrl}/civil/cases`, data, {headers: this.general.userAuthorization()});
    }
    getCivilCases(): Observable<any> {
      return this.http.get(`${this.civilCasesUrl}/civil/cases`, {headers: this.general.userAuthorization()});
    }
    getCivilExtendedJurisdictions(): Observable<any> {
      return this.http.get(`${this.civilCasesUrl}/civil/extended-jurisdictions`, {headers: this.general.userAuthorization()});
    }
    showCivilCases(id: any) {
      return this.http.get<any>(`${this.civilCasesUrl}/civil/cases/show/${id}`, {headers: this.general.userAuthorization()});
    }
    automaticCivilCasesAssignment(id: any, data: any) {
      return this.http.post<any>(`${this.civilCasesUrl}/civil/${id}/auto-assignment`,data, {headers: this.general.userAuthorization()});
    }
  }
  
