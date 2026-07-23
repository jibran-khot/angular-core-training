import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface EmployeeType {
  id: number,
  name: string,
  salary: number;
}

@Component({
  selector: 'app-employee-increment',
  imports: [CommonModule],
  templateUrl: './employee-increment.component.html',
  styleUrl: './employee-increment.component.css',
})
export class EmployeeIncrementComponent {
  employees: EmployeeType[] = [
    { id: 1, name: 'jibran', salary: 60000 },
    { id: 2, name: 'arshan', salary: 70000 },
    { id: 3, name: 'shayan', salary: 80000 },
    { id: 4, name: 'razin', salary: 40000 },
    { id: 5, name: 'faizan', salary: 90000 }
  ];

  calculateIncrement(salary: number, percentage: number = 5) {
    return salary * percentage / 100
  }
}
