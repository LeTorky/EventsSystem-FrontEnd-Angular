import { Component, EventEmitter, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }
  tryLogin(){
    this.loginService.login().subscribe(data=>{
      localStorage.setItem("token", (data as any).token);
      localStorage.setItem("role", (data as any).profile.role);
      localStorage.setItem("userName", (data as any).profile.userName);
      localStorage.setItem("profile", JSON.stringify((data as any).profile));
      this.loginService.userName = (data as any).profile.userName;
      this.loginService.role = (data as any).profile.role;
      this.loginService.logged = true;
      this.loginService.profile = (data as any).profile;
      this.infoAlertHide();
    },error=>{this.infoAlertShow()})
  }

  infoAlertShow(){
    let modal = document.getElementsByTagName("app-modal");
    (modal[0] as any).style.display="block";
  }

  infoAlertHide(){
    let modal = document.getElementsByTagName("app-modal");
    (modal[0] as any).style.display="none";
  }

  ngOnInit(): void {
  }

  register():void{
    let element = document.getElementsByTagName('app-register')[0];
    (element as any).style.display="block";
  }

}
