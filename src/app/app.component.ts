import { Component } from '@angular/core';
import { EmployeeExpenseComponent } from "./components/employee-expense/employee-expense.component";
import { EmployeePerformanceComponent } from "./components/employee-performance/employee-performance.component";
import { EmployeeSalaryComponent } from "./employee-salary/employee-salary.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeExpenseComponent, EmployeePerformanceComponent, EmployeeSalaryComponent]
})
export class AppComponent {

}