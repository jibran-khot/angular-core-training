import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-core-training';
  userName: string = 'John Doe';
  userAge: number = 30;

  onUserSelected(name: string) {
    console.log('Selected User: ', name);
  }
}
