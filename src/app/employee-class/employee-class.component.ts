import { Component } from '@angular/core';

class Employee {
  constructor(
    public id: number,
    public name: string,
    public department: string,
    public salary: number
  ) { }

  getEmployeeSummary(): string {
    return `${this.name} works in ${this.department} department and earns ₹${this.salary}.`;
  }
}

@Component({
  selector: 'app-employee-class',
  imports: [],
  templateUrl: './employee-class.component.html',
  styleUrl: './employee-class.component.css',
})
export class EmployeeClassComponent {

  employees: Employee[] = [
    new Employee(1, 'Jibran', 'IT', 50000),
    new Employee(2, 'Arshan', 'HR', 45000),
    new Employee(3, 'Shayan', 'Finance', 55000)
  ];

}