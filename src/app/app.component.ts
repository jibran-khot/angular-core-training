import { Component } from '@angular/core';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { EmployeeStatusComponent } from './components/employee-status/employee-status.component';
// import { EmployeeCardComponent } from "./components/employee-card/employee-card.component";
// import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
// import { ProductListComponent } from "./components/product-list/product-list.component";
// import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
// import { EmployeeRoleComponent } from './components/employee-role/employee-role.component';
import { EmployeeFunctionsComponent } from './components/employee-functions/employee-functions.component';
import { StudentFunctionsComponent } from './components/student-functions/student-functions.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        // EmployeeStatusComponent,
        // ProductDetailsComponent,
        // EmployeeCardComponent,
        // EmployeeListComponent,
        // ProductListComponent,
        // OrderSummaryComponent,
        // EmployeeRoleComponent,
        // EmployeeFunctionsComponent,
        StudentFunctionsComponent
    ]
})
export class AppComponent {

}