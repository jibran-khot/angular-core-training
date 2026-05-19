import { Component } from '@angular/core';
import { EmployeeBonusComponent } from "./employee-bonus/employee-bonus.component";
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { EmployeeStatusComponent } from './components/employee-status/employee-status.component';
// import { EmployeeCardComponent } from "./components/employee-card/employee-card.component";
// import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
// import { ProductListComponent } from "./components/product-list/product-list.component";
// import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
// import { EmployeeRoleComponent } from './components/employee-role/employee-role.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        EmployeeBonusComponent
    ]
})
export class AppComponent {

}