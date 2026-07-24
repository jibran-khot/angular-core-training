import { Component } from '@angular/core';
import { EmployeeExpenseComponent } from "./employee-expense/employee-expense.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeExpenseComponent]
})
export class AppComponent {

}