import { Component } from '@angular/core';

interface EmployeeData {
  id: number,
  name: string,
  department: string,
  salary: number,
  isActive: boolean
}

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {

  employees: EmployeeData[] = [{
    id: 1,
    name: 'Jibran', department: 'IT',
    salary: 40000, isActive: true
  }, {
    id: 2,
    name: 'Arshan', department: 'Clientside',
    salary: 50000, isActive: true
  }, {
    id: 3,
    name: 'Shayan', department: 'CEO',
    salary: 90000, isActive: true
  }]
}
