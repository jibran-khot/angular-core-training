
import { Component } from '@angular/core';
@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css'],
    standalone: false,
})
export class UserCardComponent {
    name: string = 'Jibran';
    age: number = 23;
}