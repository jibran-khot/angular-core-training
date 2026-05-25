import { Component } from '@angular/core';
import { EmployeeTeamComponent } from "./employee-team/employee-team.component";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmployeeTeamComponent]
})
export class AppComponent {

}