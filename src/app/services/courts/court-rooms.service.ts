import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  GeneralService } from  '../../services/general.service';
@Injectable()
export class CourtRoomsService {
  private getCourtRoomslUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addCourtRooms(data: any) {
    return this.http.post<any>(`${this.getCourtRoomslUrl}/court-rooms`, data, {headers: this.general.userAuthorization()});
  }

  getCourtRooms(): Observable<any> {
    return this.http.get(`${this.getCourtRoomslUrl}/court-rooms`, {headers: this.general.userAuthorization()});

  }

  showCourtRooms(id: any) {
    return this.http.get<any>(`${this.getCourtRoomslUrl}/court-rooms/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editCourtRooms(id: any, data: any) {
    return this.http.put<any>(`${this.getCourtRoomslUrl}/court-rooms/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteCourtRooms(id: any) {
    return this.http.delete<any>(`${this.getCourtRoomslUrl}/court-rooms/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
