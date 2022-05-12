import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public eventService:EventService, public loginService:LoginService) { }
  ngOnInit(): void {
    this.eventService.getEvents();
  }

  showConfirm(event:any):void{
    this.eventService.event = event;
    let modal = document.getElementsByTagName("app-confirm");
    (modal[0] as any).style.display="block";
  }

  confirm(event:boolean):void{
    event == true ? this.eventService.deleteEvent() : null;
    let modal = document.getElementsByTagName("app-confirm");
    (modal[0] as any).style.display="none";
  }

  showAdd():void{
    let modal = document.getElementsByTagName("app-add-event");
    (modal[0] as any).style.display="block";
  }

  acceptEvent(_id:number, flag:boolean):void{
    this.eventService.getEvent(_id);
    this.eventService.acceptEvent(flag);
  }

}
