import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private empservice : EmployeeServiceService) {}

empdata : any = {};

  SaveData()
  {   
    this.empservice.addEmployee(this.empdata).subscribe(
      { next : abc => {console.log(abc);      
            alert("Employee added successfully");}
          , error :  error => {      
            console.log(error);      
          }
      }
        );      
  }

  getAllEmps()
  {
    
  }
  
}
