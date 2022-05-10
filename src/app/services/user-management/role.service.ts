import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from  '../../services/general.service';
import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root' 
  })

export class RolesService {
  private getRoleslUrl = 'http://localhost:8000/api/v1';



  constructor(private http: HttpClient, private general: GeneralService) { }

  addRoles(data: any) {
    return this.http.post<any>(`${this.getRoleslUrl}/roles`, data, {headers: this.general.userAuthorization()});
  }

  getRoles(): Observable<any> {
    return this.http.get(`${this.getRoleslUrl}/roles`, {headers: this.general.userAuthorization()});

  }

  showRoles(id: any) {
    return this.http.get<any>(`${this.getRoleslUrl}/roles/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editRoles(id: any, data: any) {
    return this.http.put<any>(`${this.getRoleslUrl}/roles/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteRoles(id: any) {
    return this.http.delete<any>(`${this.getRoleslUrl}/roles/delete/${id}`, {headers: this.general.userAuthorization()});
  }


  getPermissions(): Observable<any> {
    return this.http.get(`${this.getRoleslUrl}/permissions`, {headers: this.general.userAuthorization()});

  }


}
