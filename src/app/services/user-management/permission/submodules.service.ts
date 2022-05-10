import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from  '../../../services/general.service';
import { Observable } from 'rxjs';

@Injectable()
export class SubmodulesService {
  private getSubmoduleslUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient, private general: GeneralService) { }

  addSubmodules(data: any) {
    return this.http.post<any>(`${this.getSubmoduleslUrl}/submodules/create`, data, {headers: this.general.userAuthorization()});
  }

  getSubmodules(): Observable<any> {
    return this.http.get(`${this.getSubmoduleslUrl}/submodules`, {headers: this.general.userAuthorization()});

  }

  showSubmodules(id: any) {
    return this.http.get<any>(`${this.getSubmoduleslUrl}/submodules/show/${id}`, {headers: this.general.userAuthorization()});
  }

  editSubmodules(id: any, data: any) {
    return this.http.put<any>(`${this.getSubmoduleslUrl}/submodules/edit/${id}`,data, {headers: this.general.userAuthorization()});
  }

  deleteSubmodules(id: any) {
    return this.http.delete<any>(`${this.getSubmoduleslUrl}/submodules/delete/${id}`, {headers: this.general.userAuthorization()});
  }
}
