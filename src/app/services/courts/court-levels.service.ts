import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../services/general.service';

const getCourtLevelUrl = 'http://localhost:8000/api/v1/court-levels';

@Injectable()
export class CourtLevelsService {
  private courtLevelsUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addCourtLevels(data: any) {
    return this.http.post<any>(`${this.courtLevelsUrl}/court-levels`, data, {headers: this.general.userAuthorization()});
  }

  getCourtLevels(): Observable<any> {
    return this.http.get(`${this.courtLevelsUrl}/court-levels`, {headers: this.general.userAuthorization()});

  }

  showCourtLevels(id: any) {
    return this.http.get<any>(`${this.courtLevelsUrl}/court-levels/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editCourtLevels(id: any, data: any) {
    return this.http.put<any>(`${this.courtLevelsUrl}/court-levels/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteCourtLevels(id: any) {
    return this.http.delete<any>(`${this.courtLevelsUrl}/court-levels/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
