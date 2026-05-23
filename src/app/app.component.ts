import { Component } from '@angular/core';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeProfileComponent]
})
export class AppComponent {

}