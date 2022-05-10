import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from  '../../../services/general.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ModulesService {
  private getModuleslUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient, private general: GeneralService) { }

  addModules(data: any) {
    return this.http.post<any>(`${this.getModuleslUrl}/modules/create`, data, {headers: this.general.userAuthorization()});
  }

  getModules(): Observable<any> {
    return this.http.get(`${this.getModuleslUrl}/modules`, {headers: this.general.userAuthorization()});

  }

  showModules(id: any) {
    return this.http.get<any>(`${this.getModuleslUrl}/modules/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editModules(id: any, data: any) {
    return this.http.put<any>(`${this.getModuleslUrl}/modules/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteModules(id: any) {
    return this.http.delete<any>(`${this.getModuleslUrl}/modules/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
