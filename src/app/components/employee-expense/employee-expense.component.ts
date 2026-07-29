import { Component } from '@angular/core';

interface EmployeeData {
  id: number,
  name: string,
  department: string;
}
@Component({
  selector: 'app-employee-expense',
  imports: [],
  templateUrl: './employee-expense.component.html',
  styleUrl: './employee-expense.component.css',
})
export class EmployeeExpenseComponent {
  employees: EmployeeData[] = [
    { id: 1, name: 'jibran', department: 'Developer' },
    { id: 2, name: 'arshan', department: 'HR' },
    { id: 3, name: 'shayan', department: 'Finance' },
    { id: 4, name: 'imran', department: 'Marketing' },
    { id: 5, name: 'rehan', department: 'IT' }
  ];


  calculateTotalExpense(...expenses: number[]): number {
    let total: number = 0;
    for (let expense of expenses) {
      total += expense;
    }
    return total;
  }
}
