import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { EmployeeCardComponent } from "./employee-card/employee-card.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        EmployeeStatusComponent,
        ProductDetailsComponent,
        EmployeeCardComponent,
        EmployeeListComponent,
        ProductListComponent,
        OrderSummaryComponent
    ]
})
export class AppComponent {

}