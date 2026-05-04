import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'John Doe';
  userAge = 30;
  counterValue = 0;

  users = [
    { name: 'Jibran', age: 23 },
    { name: 'Aman', age: 28 }
  ];

  selectedUser = '';
  onUserSelected(name: string) {
    console.log('Selected User:', name);
    this.selectedUser = name;
  }

  onCounterChanged(value: number) {
    this.counterValue = value;
  }
}