import { Component } from '@angular/core';
import { EmployeeExpenseComponent } from "./components/employee-expense/employee-expense.component";
import { EmployeePerformanceComponent } from "./employee-performance/employee-performance.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeExpenseComponent, EmployeePerformanceComponent]
})
export class AppComponent {

}