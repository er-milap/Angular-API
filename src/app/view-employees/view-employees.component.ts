import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {
constructor(private empservice : EmployeeServiceService)
{
  this.getAllEmps();
}

empList : any = [];

getAllEmps()
{
  this.empservice.getEmployee().subscribe({next : success => {     
    console.log(success); this.empList=success;   }, 
    error : error =>{      
    console.log(error);     
  }});
}

edit(emp: any)
{}
}
