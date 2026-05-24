import { Component } from '@angular/core';


interface Employee {
  id: number,
  name: string,
  department: string,
  salary: number
}

@Component({
  selector: 'app-employee-profile',
  imports: [],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css',
})
export class EmployeeProfileComponent {

  employee: Employee = {
    id: 1, name: 'jibran', department: 'IT', salary: 50000
  };

  showEmployeeProfile(): string {
    const { id, name, department, salary } = this.employee;
    return `ID: ${id} | Name: ${name} | Department: ${department} | Salary: ${salary} `
  }
}
