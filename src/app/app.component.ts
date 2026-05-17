import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { EmployeeCardComponent } from "./employee-card/employee-card.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        EmployeeStatusComponent,
        ProductDetailsComponent,
        EmployeeCardComponent
    ]
})
export class AppComponent {

}