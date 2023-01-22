import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() studentIndex: number;
  showImage = false;
  numOfClicks = 0;
  constructor(private studServ: StudentsService) {}

  ngOnInit(): void {
    console.log(this.studentIndex);
    
  }

  onStudentClick() {
    this.showImage = true;
    const audio = new Audio('../assets/click2.mp3');
    audio.play();
    this.numOfClicks++;
    console.log(this.numOfClicks)
    if (this.numOfClicks === 2) {
      this.studServ.setWinnerActive(true)
      setTimeout(() => {
        this.studServ.setWinnerActive(false)
        this.numOfClicks--;
      }, 2000)
    }
  }

  onHide() {
    this.showImage = false;
    console.log('hide');
    this.numOfClicks = 0;
  }
}
