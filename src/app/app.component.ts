import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  students = [];
  showWinner = false;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents();
    this.studentsService.activateWinner.subscribe((data) => {
      this.showWinner = data;
    })
  }


}
