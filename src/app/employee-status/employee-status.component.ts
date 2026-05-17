import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-status',
  imports: [CommonModule],
  templateUrl: './employee-status.component.html',
  styleUrl: './employee-status.component.css',
})
export class EmployeeStatusComponent {

  employeeName: string = 'Jibran';
  employeeAge: number = 25;
  employeeSalary: number = 50000;
  isPermanentEmployee: boolean = true;
  employeeEmail: null = null;
  lastLoginTime: undefined;


}
