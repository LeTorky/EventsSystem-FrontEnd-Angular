import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(public studentService:StudentService, public nav:Router) { }

  ngOnInit(): void {
    let profile:any = JSON.parse(localStorage.getItem("profile") as any);
    this.studentService.student._id = profile._id;
    this.studentService.student.userName = profile.userName;
    this.studentService.student.passWord = profile.passWord;
    this.studentService.student.email = profile.email;
  }

  updateStudent():void{
    this.studentService.updateStudentByStudent();
    let profile = {
      _id : this.studentService.student._id,
      email : this.studentService.student.email,
      userName : this.studentService.student.userName,
      passWord:this.studentService.student.passWord
    }
    localStorage.setItem("profile",JSON.stringify(profile));
    this.nav.navigate(['/']);
  }
}
