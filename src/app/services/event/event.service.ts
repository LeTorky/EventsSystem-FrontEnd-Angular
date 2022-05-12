import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Event } from 'src/app/Models/event/event';
import { Speaker } from 'src/app/Models/speaker/speaker';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http:HttpClient) { }
  events:Event[] = [];
  event:Event = new Event(0,"",new Date(),new Speaker(0,"","",{city:"",street:"",building:""}),[],[],false,false);
  getEvents():void{
    this.http.get(environment.root+environment.port+environment.event).subscribe(
      data=>{
        this.events.length = 0;
        (data as object[]).forEach(obj=>{
          this.events.push(obj as Event);
        });
      }
    );
  }

  getEvent(_id:number):void{
    this.events.forEach(event=>{
      if(event._id == _id)
        this.event = event;
    })
  }

  deleteEvent():void{
    let body= {_id:this.event._id};
    this.http.delete(environment.root+environment.port+environment.event,{body:body}).subscribe(data=>{
      this.getEvents();
    });
  }

  updateEvent():void{
    let body = {_id:this.event._id,title:this.event.title,date:this.event.date,mainSpeaker:this.event.mainSpeaker,otherSpeakers:this.event.otherSpeakers,students:this.event.students,accepted:this.event.accepted}
    body.accepted = body.accepted ?? false;
    this.http.put(environment.root+environment.port+environment.event,body).subscribe(
      data=>{
        this.getEvents();
      }
    );
  }

  addEvent():void{
    let body = {_id:this.event._id,title:this.event.title,date:this.event.date,mainSpeaker:this.event.mainSpeaker,otherSpeakers:this.event.otherSpeakers,students:this.event.students,accepted:this.event.accepted}
    body.accepted = body.accepted ?? false;
    this.http.post(environment.root+environment.port+environment.event,body).subscribe(
      data=>{
        this.getEvents();
      }
    );
  }

  acceptEvent(flag:boolean):void{
    let body = {_id:this.event._id,accepted:flag,title:"",date:"",mainSpeaker:"",otherSpeakers:"",students:""};
    this.http.put(environment.root+environment.port+environment.event,body).subscribe(
      data=>{
        this.getEvents();
      }
    )
  }
}
