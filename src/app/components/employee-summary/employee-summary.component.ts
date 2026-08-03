import { Component } from '@angular/core';

interface Employee {
  id: number, name: string, department: string, salary: number, experience: number
}


@Component({
  selector: 'app-employee-summary',
  imports: [],
  templateUrl: './employee-summary.component.html',
  styleUrl: './employee-summary.component.css',
})
export class EmployeeSummaryComponent {
  employee: Employee = {
    id: 1, name: 'jibran', department: 'IT', salary: 50000, experience: 3
  };
  generateSummary(): string {
    const { id, name, department, salary, experience } = this.employee;
    const result =
      `Employee ID : ${id}
    Name : ${name}
    Department : ${department}
    Salary : ${salary}
    Annaul Salary : ${salary * 12}
    Total Experience : ${experience}
    `;
    return result;
  }
}
