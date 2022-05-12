import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public studentService:StudentService) { }
  
  ngOnInit(): void {
    this.studentService.getStudents();
  }

  showConfirm(student:any):void{
    this.studentService.student = student;
    let modal = document.getElementsByTagName("app-confirm");
    (modal[0] as any).style.display="block";
  }

  confirm(event:boolean):void{
    event == true ? this.studentService.deleteStudent() : null;
    let modal = document.getElementsByTagName("app-confirm");
    (modal[0] as any).style.display="none";
  }
}
