import { Component } from '@angular/core';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeSearchComponent]
})
export class AppComponent {

}