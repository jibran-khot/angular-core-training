import { Component } from '@angular/core';



interface Employee {
  id: number,
  name: string,
  department: string;
}


@Component({
  selector: 'app-employee-team',
  imports: [],
  templateUrl: './employee-team.component.html',
  styleUrl: './employee-team.component.css',
})
export class EmployeeTeamComponent {

  frontendTeam: Employee[] = [
    { id: 1, name: 'jibran', department: 'IT' },
    { id: 2, name: 'arshan', department: 'IT' },
    { id: 3, name: 'shayan', department: 'IT' }
  ];
  backendTeam: Employee[] = [
    { id: 1, name: 'Raza', department: 'IT' },
    { id: 2, name: 'Razin', department: 'IT' },
  ];

  mergeTeams(): string {
    const allEmployees = [...this.frontendTeam, ...this.backendTeam];

    let result = '';

    for (let i = 0; i < allEmployees.length; i++) {
      const employee = allEmployees[i];
      result = result + employee.name + ' | ';
    };
    return result;
  }

}
