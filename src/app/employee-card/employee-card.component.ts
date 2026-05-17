import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface empData {
  id: number,
  name: string,
  age: number,
  department: string,
  salary: number,
  isActive: boolean
}

@Component({
  selector: 'app-employee-card',
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {
  employee: empData = {
    id: 1,
    name: 'Jibran',
    age: 25,
    department: 'Development',
    salary: 50000,
    isActive: true
  }
}
