import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StudentsService {
  activateWinner = new Subject<boolean>();

  students = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]

  getStudents() {
    return this.students;
  }

  setWinnerActive(status: boolean) {
    this.activateWinner.next(status);
    console.log(status)
  }
}
