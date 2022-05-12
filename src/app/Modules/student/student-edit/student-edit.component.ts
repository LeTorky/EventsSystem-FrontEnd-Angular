import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/student/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(public studentService:StudentService, public router:ActivatedRoute, public nav:Router) { }
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.studentService.getStudent(params['_id']);
    })
  }
  updateStudent():void{
    this.studentService.updateStudent();
    this.nav.navigate(['/Students']);
  }
}
