import { Component } from '@angular/core';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        EmployeeContactComponent
    ]
})
export class AppComponent {

}