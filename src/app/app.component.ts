import { Component } from '@angular/core';
import { EmployeeSummaryComponent } from "./employee-summary/employee-summary.component";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeSummaryComponent]
})
export class AppComponent {

}