import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../employee-dashboard/employee-dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // apiurl = 'http://localhost:3000/posts';

  // getAllEmploye(): Observable<EmployeeModel[]> {
  //   return this.http.get<EmployeeModel[]>(this.apiurl);
  // }

  // deleteAllEmploye(id: any) {
  //   return this.http.delete(this.apiurl + '/' + id);
  // }

  // createAllEmploye(data: any) {
  //   return this.http.post(this.apiurl, data);
  // }

  // updateAllEmploye(id: any, data: any) {
  //   return this.http.put(this.apiurl + '/' + id, data);
  // }


  postEmployee(data: any) {
    return this.http.post<any>('http://localhost:3000/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getEmployee() {
    return this.http.get<any>('http://localhost:3000').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteEmplyee(id:any){
    return this.http.delete<any>('http://localhost:3000/' + id)
  }

  updateEmployee(data:any, id:number){
return this.http.put<any>('http://localhost:3000/'+id, data)
.pipe(map((res: any) => {
  return res;
}))
  }
}
