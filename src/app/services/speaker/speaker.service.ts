import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Speaker } from 'src/app/Models/speaker/speaker';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(public http:HttpClient, public loginService:LoginService) { }
  speakers:Speaker[] = [];
  speaker:Speaker = new Speaker(0,"","",{city:"",street:"",building:""});
  getSpeakers():void{
    this.http.get(environment.root+environment.port+environment.speaker).subscribe(
      data=>{
        this.speakers.length = 0;
        (data as object[]).forEach(obj=>{
          this.speakers.push(obj as Speaker);
        });
      }
    );
  }

  passWord:string = "";

  getSpeaker(_id:number):void{
    this.speakers.forEach(speaker=>{
      if(speaker._id == _id)
        this.speaker = speaker;
    })
  }

  updateSpeaker():void{
    let body = {userName:"",passWord:"",email:this.speaker.email,city:this.speaker.address.city,street:this.speaker.address.street,building:this.speaker.address.building}
    body.email = this.speaker.email;
    this.http.put(environment.root+environment.port+environment.speaker+`?_id=${this.speaker._id}`,body).subscribe(
      data=>{
        this.getSpeakers();
      }
    );
  }

  deleteSpeaker():void{
    this.http.delete(environment.root+environment.port+environment.speaker+`?_id=${this.speaker._id}`).subscribe(data=>{
      this.getSpeakers();
    })
  }

  updateSpeakerBySpeaker():void{
    let body = {userName:this.speaker.userName, email:this.speaker.email, passWord:this.passWord, street:this.speaker.address.street, city:this.speaker.address.city, building:this.speaker.address.building}
    this.http.put(environment.root+environment.port+environment.speaker,body).subscribe();
  }

  registerSpeaker(){
    let body = {userName:this.speaker.userName, email:this.speaker.email, passWord:this.passWord, street:this.speaker.address.street, city:this.speaker.address.city, building:this.speaker.address.building}
    this.loginService.email = this.speaker.email;
    this.loginService.passWord = this.passWord;
    return this.http.post(environment.root+environment.port+environment.registerSpeaker,body);
  }
}
