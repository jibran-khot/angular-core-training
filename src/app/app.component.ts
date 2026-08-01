import { Component } from '@angular/core';
import { EmployeeTopPerformersComponent } from './employee-top-performers/employee-top-performers.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeTopPerformersComponent, EmployeeCardComponent]
})
export class AppComponent {

}