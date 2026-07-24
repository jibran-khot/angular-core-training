import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  department: string;
}

@Component({
  selector: 'app-employee-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-notification.component.html',
  styleUrl: './employee-notification.component.css'
})
export class EmployeeNotificationComponent {

  employees: Employee[] = [
    { id: 1, name: 'Jibran', department: 'Angular' },
    { id: 2, name: 'Arshan', department: '.NET' },
    { id: 3, name: 'Shayan', department: 'QA' },
    { id: 4, name: 'Razin', department: 'Angular' },
    { id: 5, name: 'Faizan', department: 'HR' }
  ];

  // Optional Parameter
  showEmployeeContact(name: string, email?: string): string {

    if (email === undefined) {
      return `Employee: ${name} | Email: Not Available`;
    }

    return `Employee: ${name} | Email: ${email}`;
  }

  // Default Parameter
  notificationDuration(seconds: number = 5): string {
    return `Notification Duration: ${seconds} seconds`;
  }

}