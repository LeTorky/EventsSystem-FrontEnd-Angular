import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public loginService:LoginService, public studentService:StudentService, public speakerService:SpeakerService) { 
    
  }

  ngOnInit(): void {

  }

  @Output()
  registerEvent = new EventEmitter();

  register(flag:string){
    switch(flag){
      case "student":
        this.studentService.registerStudent().subscribe(data=>{
          this.registerEvent.emit();
        }, error=>{
          this.loginService.userName = "";
          this.loginService.passWord = "";
          this.loginService.email = "";
        });
        break;
      case "speaker":
        this.speakerService.registerSpeaker().subscribe(data=>{
          this.registerEvent.emit();
        }, error=>{
          this.loginService.userName = "";
          this.loginService.passWord = "";
          this.loginService.email = "";
        });
        break;
    }
    let element = document.getElementsByTagName('app-register')[0];
    (element as any).style.display="none";
  }

  closeRegister(event:Event):void{
    if((event.target as any).id == "MainRegister"){
      let element = document.getElementsByTagName('app-register')[0];
      (element as any).style.display="none";
    }
  }
}
