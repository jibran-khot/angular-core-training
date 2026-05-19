import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Employee {
  id: number,
  name: string,
  salary: number
}
@Component({
  selector: 'app-employee-bonus',
  imports: [CommonModule],
  templateUrl: './employee-bonus.component.html',
  styleUrl: './employee-bonus.component.css',
})


export class EmployeeBonusComponent {
  employeeBonus: Employee[] = [
    { id: 1, name: 'jibran', salary: 50000 },
    { id: 2, name: 'arshan', salary: 70000 },
    { id: 3, name: 'shayan', salary: 90000 },
    { id: 4, name: 'imran', salary: 110000 },
    { id: 5, name: 'rehan', salary: 90000 }
  ];


  calculateBonus(salary: number) {
    let result: number = salary * 10 / 100
    return result;
  }

  showCompanyMessage() {
    let message: string = "Annual bonuses are calculated at 10% of salary so your Bonus is :";
    return message;
  }
}
