import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from  '../../../services/general.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class PermissionsService {
  private getPermissionslUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient, private general: GeneralService) { }

  addPermissions(data: any) {
    return this.http.post<any>(`${this.getPermissionslUrl}/permissions/create`, data, {headers: this.general.userAuthorization()});
  }

  getPermissions(): Observable<any> {
    return this.http.get(`${this.getPermissionslUrl}/permissions`, {headers: this.general.userAuthorization()});

  }

  showPermissions(id: any) {
    return this.http.get<any>(`${this.getPermissionslUrl}/permissions/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editPermissions(id: any, data: any) {
    return this.http.put<any>(`${this.getPermissionslUrl}/permissions/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deletePermissions(id: any) {
    return this.http.delete<any>(`${this.getPermissionslUrl}/permissions/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
