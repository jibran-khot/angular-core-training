import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-employee-card',
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {
  employee: any = {
    id: 1,
    name: 'Jibran',
    age: 25,
    department: 'Development',
    salary: 50000,
    isActive: true
  }
}
