import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from 'src/app/Models/student/student';
import { LoginComponent } from 'src/app/Modules/login/login.component';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService{
  constructor(public http:HttpClient, public loginService:LoginService) {
    this.getStudents();
  }
  students:Student[] = [];
  student:Student = new Student(0,"","","");
  url:string = environment.root+environment.port+environment.student;
  getStudents():void{
    this.http.get(environment.root+environment.port+environment.student).subscribe(
      data=>{
        this.students.length = 0;
        (data as object[]).forEach(obj=>{
          this.students.push(obj as Student);
        });
      }
    );
  }

  deleteStudent():void{
    this.http.delete(environment.root+environment.port+environment.student+`?_id=${this.student._id}`).subscribe(data=>{
      console.log(data);
      this.getStudents();
    })
  }

  updateStudent():void{
    let body = {userName:"",passWord:"",email:this.student.email}
    body.email = this.student.email;
    this.http.put(environment.root+environment.port+environment.student+`?_id=${this.student._id}`,body).subscribe(
      data=>{
        this.getStudents();
      }
    );
  }

  getStudent(_id:number):void{
    this.students.forEach(student=>{
      if(student._id == _id)
        this.student = student;
    })
  }

  updateStudentByStudent():void{
    let body = {userName:this.student.userName, email:this.student.email, passWord:this.student.passWord}
    this.http.put(environment.root+environment.port+environment.student,body).subscribe();
  }

  registerStudent(){
    let body = {userName:this.student.userName, email:this.student.email, passWord:this.student.passWord}
    this.loginService.email = this.student.email;
    this.loginService.passWord = this.student.passWord;
    return this.http.post(environment.root+environment.port+environment.registerStudent,body)
  }
}
