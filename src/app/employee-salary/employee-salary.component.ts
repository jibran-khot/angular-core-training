import { Component } from '@angular/core';


interface Employee {
  id: number, name: string, salary: number, department: string
}

@Component({
  selector: 'app-employee-salary',
  imports: [],
  templateUrl: './employee-salary.component.html',
  styleUrl: './employee-salary.component.css',
})
export class EmployeeSalaryComponent {
  employees: Employee[] = [
    { id: 1, name: 'jibran', department: 'IT', salary: 60000 },
    { id: 2, name: 'arshan', department: 'sales', salary: 50000 },
    { id: 3, name: 'shayan', department: 'CEO', salary: 90000 },
    { id: 4, name: 'razin', department: 'IT', salary: 60000 },
    { id: 5, name: 'raza', department: 'IT', salary: 60000 },
  ];

  calculateAnnualSalary = (monthlySalary: number): number => monthlySalary * 12;


  isHighEarner = (salary: number): string => {
    if (salary >= 60000) return 'High Earner';
    else return 'Low Earner';
  };

  formatDepartment = (department: string): string => {
    return department = 'IT';
  };

}
