
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../services/general.service';

@Injectable()
export class StakeholdersService {
  private stakeholdersUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addStakeholders(data: any) {
    return this.http.post<any>(`${this.stakeholdersUrl}/stakeholders/create`, data, {headers: this.general.userAuthorization()});
  }

  getStakeholders(): Observable<any> {
    return this.http.get(`${this.stakeholdersUrl}/stakeholders`, {headers: this.general.userAuthorization()});

  }

  showStakeholders(id: any) {
    return this.http.get<any>(`${this.stakeholdersUrl}/stakeholders/${id}/show`, {headers: this.general.userAuthorization()});
  }

  editStakeholders(id: any, data: any) {
    return this.http.put<any>(`${this.stakeholdersUrl}/stakeholders/${id}/edit`,data, {headers: this.general.userAuthorization()});
  }

  deleteStakeholders(id: any) {
    return this.http.delete<any>(`${this.stakeholdersUrl}/stakeholders/${id}/delete`, {headers: this.general.userAuthorization()});
  }
}
