import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(public eventService:EventService, public studentService:StudentService, public speakerService:SpeakerService) { }

  ngOnInit(): void {
    this.studentService.getStudents();
    this.speakerService.getSpeakers();
  }

  addEvent():void{
    let modal = document.getElementsByTagName("app-add-event");
    (modal[0] as any).style.display="none";
    this.eventService.addEvent();
  }

  closeComponent(event:Event):void{
    if((event.target as any).id == "Main"){
      let modal = document.getElementsByTagName("app-add-event");
      (modal[0] as any).style.display="none";
    }
  }

  DateParse(dateString:any){
    this.eventService.event.date = new Date(dateString);
  }
  mainSpeaker:number|null =null;
  otherSpeakers:number[] = [];
  students:number[] = [];
}
