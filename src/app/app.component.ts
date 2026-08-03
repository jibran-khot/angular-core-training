import { Component } from '@angular/core';
import { EmployeeClassComponent } from "./employee-class/employee-class.component";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeClassComponent]
})
export class AppComponent {

}