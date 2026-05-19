import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-functions',
  imports: [CommonModule],
  templateUrl: './student-functions.component.html',
  styleUrl: './student-functions.component.css',
})
export class StudentFunctionsComponent implements OnInit {
  studentName: string = "Ayaan";
  subject: string = "Mathematics";
  marks: number = 82;
  totalMarks: number = 100;
  attendance: number = 91;
  message: string = ""

  ngOnInit(): void {
    this.WelcomeMessage();
  }

  WelcomeMessage() {
    this.message = `$ Welcome Ayaan!`
  }

}
