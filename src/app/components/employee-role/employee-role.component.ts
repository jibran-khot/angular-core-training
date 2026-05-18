import { Component } from '@angular/core';

enum EmployeeRole {
  Admin = 'Admin', Manager = 'Manager', Developer = 'Developer', Tester = 'Tester'
}

enum LeaveStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected'
}

@Component({
  selector: 'app-employee-role',
  imports: [],
  templateUrl: './employee-role.component.html',
  styleUrl: './employee-role.component.css',
})
export class EmployeeRoleComponent {


  employeeRole: EmployeeRole = EmployeeRole.Developer;

  leaveStatus: LeaveStatus = LeaveStatus.Approved

}
