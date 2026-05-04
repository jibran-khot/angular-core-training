import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
    @Input() name!: string;
    @Input() age!: number;

    @Output() userSelected = new EventEmitter<string>();

    onSelectUser() {
        this.userSelected.emit(this.name);
    }
}