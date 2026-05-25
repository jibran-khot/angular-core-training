import { Component } from '@angular/core';


interface Employee {
  id: number,
  name: string,
  department: string;
}
@Component({
  selector: 'app-employee-top-performers',
  imports: [],
  templateUrl: './employee-top-performers.component.html',
  styleUrl: './employee-top-performers.component.css',
})
export class EmployeeTopPerformersComponent {

  topEmployees: Employee[] = [
    { id: 1, name: 'jibran', department: 'IT' },
    { id: 2, name: 'arshan', department: 'IT' },
    { id: 3, name: 'shayan', department: 'IT' }
  ];
  showTopEmployees(): string {

    let Allempdata: string;
    let EmpData: string;
    const [FristEmployee, SecondEmployee, ThirdEmployee] = this.topEmployees;

    Allempdata = `Gold: ${FristEmployee.name} | Silver: ${SecondEmployee.name} | Bronze: ${ThirdEmployee.name}`;

    EmpData = ` Gold: ${FristEmployee.name}  | Bronze: ${ThirdEmployee.name}`

    return `Frist Array:${Allempdata} 
     Second Array:${EmpData}`;

  };
}
