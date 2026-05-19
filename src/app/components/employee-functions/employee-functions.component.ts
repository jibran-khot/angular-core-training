import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-functions',
  standalone: true,
  imports: [],
  templateUrl: './employee-functions.component.html',
  styleUrl: './employee-functions.component.css',
})
export class EmployeeFunctionsComponent implements OnInit {

  employeeName: string = 'Jibran';
  department: string = 'Frontend';
  basicSalary: number = 50000;
  yearsOfExperience: number = 3;

  ngOnInit(): void {
    this.welcomeMessage();
  }

  welcomeMessage(): void {
    console.log(`Welcome ${this.employeeName}!`);
  }

  calculateYearlySalary(monthlySalary: number): number {
    return monthlySalary * 12;
  }

  getEmployeeLevel(experience: number): string {
    if (experience < 3) {
      return 'Junior';
    }

    return 'Mid-Level';
  }

  getEmployeeDescription(): string {
    return `${this.employeeName} works in ${this.department} department.`;
  }

}