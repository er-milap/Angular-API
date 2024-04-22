import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor (private empservice : EmployeeServiceService, private router:Router ) {}

  getData()
  {
    this.empservice.getEmployee().subscribe({next : success => {     
           console.log(success);   }, 
           error : error =>{      
           console.log(error);     
         }});

         this.router.navigate(['viewEmployees'])
     
  }

  userInfo: any = {};

  btnClicked()
  {
    console.log(this.userInfo);
    
  }

 

  regEmp()
  {
    this.router.navigate(['reg']);
  }

  

  
}
