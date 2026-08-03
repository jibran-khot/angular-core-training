import { Component } from '@angular/core';

class Employee {
  id: number = 0;
  name: string = '';
  department: string = '';
  salary: number = 0;

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

  employees: Employee[] = [];

  constructor() {
    const emp1 = new Employee();
    emp1.id = 1;
    emp1.name = 'Jibran';
    emp1.department = 'IT';
    emp1.salary = 50000;

    const emp2 = new Employee();
    emp2.id = 2;
    emp2.name = 'Arshan';
    emp2.department = 'HR';
    emp2.salary = 45000;

    const emp3 = new Employee();
    emp3.id = 3;
    emp3.name = 'Shayan';
    emp3.department = 'Finance';
    emp3.salary = 55000;

    this.employees.push(emp1, emp2, emp3);
  }
}