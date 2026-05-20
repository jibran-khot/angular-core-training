import { Component } from '@angular/core';

interface EmployeeCard {
  id: number,
  name: string,
  position: string
}

@Component({
  selector: 'app-employee-contact',
  imports: [],
  templateUrl: './employee-contact.component.html',
  styleUrl: './employee-contact.component.css',
})
export class EmployeeContactComponent {
  employees: EmployeeCard[] = [
    { id: 1, name: 'Razin', position: 'developer' },
    { id: 2, name: 'Raza', position: 'developer' },
    { id: 3, name: 'Faizan', position: 'Senior-developer' },
    { id: 4, name: 'Jibran', position: 'developer' },
    { id: 5, name: 'Wasi', position: 'Senior-developer' }
  ];

  showEmployeeContact(name: string, email?: string) {
    let result: string;

    if (email === '' || email === undefined) {
      result = "Employee:" + name + " | Email: Not Available";
    } else {
      result = "Employee:" + name + " | Email:" + email;
    }
    return result;
  }


}
