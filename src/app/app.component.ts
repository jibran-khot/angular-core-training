import { Component } from '@angular/core';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeStatusComponent]
})
export class AppComponent {

}