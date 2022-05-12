import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginComponent } from 'src/app/Modules/login/login.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService { 
  logged:boolean = false;
  email:string = "";
  passWord:string = "";
  userName:string = "";
  profile:any = null;
  url:string = environment.root+environment.port+environment.login;
  role:string = "";
  constructor(public http:HttpClient) {
    if (localStorage.getItem("token")!= null){
      this.logged = true;
      this.role = localStorage.getItem("role") || "";
      this.userName = localStorage.getItem("userName") || "";
      this.profile = localStorage.getItem("profile");
    }
  }

  login():Observable<Object>{
    let body = {
      email:this.email,
      passWord:this.passWord
    };
    return this.http.post(this.url, body)
  }

  logout():void{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("profile");
    this.userName = "";
    this.email = "";
    this.passWord = "";
    this.role = "";
    this.logged = false;
  }

  getToken():string|null{
    return localStorage.getItem("token");
  }

  getUserName():string{
    return JSON.parse(localStorage.getItem("profile")as any).userName;
  }
}
