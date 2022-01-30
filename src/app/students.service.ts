import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StudentsService {
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
}
