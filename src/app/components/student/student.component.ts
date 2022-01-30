import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentIndex: number;
  showImage = false;
  constructor() { }

  ngOnInit(): void {
  }

  onStudentClick() {
    this.showImage = true;
    const audio = new Audio('../assets/click.mp3');
    audio.play();
  }

}
