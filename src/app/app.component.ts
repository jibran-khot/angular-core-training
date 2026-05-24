import { Component } from '@angular/core';
import { EmployeeTopPerformersComponent } from './employee-top-performers/employee-top-performers.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeTopPerformersComponent]
})
export class AppComponent {

}