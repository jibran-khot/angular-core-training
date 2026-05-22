import { Component } from '@angular/core';


interface Employee {
  id: number,
  name: string,
  department: string;
}


@Component({
  selector: 'app-employee-search',
  imports: [],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.css',
})
export class EmployeeSearchComponent {
  employeeData: Employee[] = [
    { id: 1, name: 'jibran', department: 'IT' },
    { id: 2, name: 'arshan', department: 'IT' },
    { id: 3, name: 'shayan', department: 'IT' },
    { id: 4, name: 'razin', department: 'IT' },
    { id: 5, name: 'raza', department: 'IT' },
  ];

  searchEmployee(id: number): string;

  searchEmployee(name: string): string;

  searchEmployee(value: any): string {

    if (typeof value === 'number') {

      for (const employee of this.employeeData) {

        if (employee.id === value) {
          return `Employee Found: ${employee.name}`;
        }

      }

      return 'Employee Not Found';
    }

    if (typeof value === 'string') {

      for (const employee of this.employeeData) {

        if (employee.name.toLowerCase() === value.toLowerCase()) {
          return `Employee Found: ${employee.name}`;
        }

      }

      return 'Employee Not Found';
    }

    return 'Employee Not Found';
  }

}
