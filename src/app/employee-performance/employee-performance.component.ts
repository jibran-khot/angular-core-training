import { Component } from '@angular/core';


interface Employee {
  id: number,
  name: string,
  department: string,
  completedTasks: number
}

@Component({
  selector: 'app-employee-performance',
  templateUrl: './employee-performance.component.html',
  styleUrls: ['./employee-performance.component.css'],
})
export class EmployeePerformanceComponent {

  employees: Employee[] = [
    { id: 1, name: 'jibran', department: 'IT', completedTasks: 10 },
    { id: 2, name: 'arshan', department: 'IT', completedTasks: 29 },
    { id: 3, name: 'shayan', department: 'IT', completedTasks: 40 },
    { id: 4, name: 'razin', department: 'IT', completedTasks: 5 },
    { id: 5, name: 'faizan', department: 'IT', completedTasks: 30 },
  ];

  calculatePerformance = (completedTasks: number): string => {
    if (completedTasks >= 30) return 'Excellent';
    if (completedTasks >= 20) return 'Good';
    if (completedTasks >= 10) return 'Average';
    return 'Needs Improvement';
  };

  welcomeEmployee = (name: string): string => {
    return `Welcome ${name}`;
  };

}
