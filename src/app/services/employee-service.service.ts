import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient : HttpClient) { }

  getEmployee()
  {
    return this.httpClient.get("http://10.98.7.218:8088/employees");
  }

  addEmployee(newEmp : any)
  {
    return this.httpClient.post("http://10.98.7.218:8088/employees", newEmp);
  }
}
