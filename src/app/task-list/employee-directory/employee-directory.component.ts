import { Component } from '@angular/core';


interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

@Component({
  selector: 'app-employee-directory',
  imports: [],
  templateUrl: './employee-directory.component.html',
  styleUrl: './employee-directory.component.css',
})

export class EmployeeDirectoryComponent {

  employeeData: Employee[] = [
    {
      id: 1,
      name: '',
      department: '',
      salary: 0
    }
  ]

}
