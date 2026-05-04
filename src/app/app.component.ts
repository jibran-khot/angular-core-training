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

  onUserSelected(name: string) {
    console.log('Selected User:', name);
  }

  onCounterChanged(value: number) {
    this.counterValue = value;
  }
}