import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from 'src/app/Models/speaker/speaker';
import { Student } from 'src/app/Models/student/student';
import { EventService } from 'src/app/services/event/event.service';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(public eventService:EventService, public router:ActivatedRoute, public nav:Router, public studentService:StudentService, public speakerService:SpeakerService) { }
  ngOnInit(): void {
    this.studentService.getStudents();
    this.speakerService.getSpeakers();
    this.router.params.subscribe(params=>{
      this.eventService.getEvent(params['_id']);
    });
    this.currentTitle = this.eventService.event.title;
    this.eventService.event.otherSpeakers.forEach(speaker=>this.currentSpeakers.push(speaker._id));
    this.eventService.event.students.forEach(speaker=>this.currentStudents.push(speaker._id));
  }
  updateEvent():void{
    this.eventService.event.otherSpeakers.length = 0;
    this.eventService.event.students.length = 0;
    this.speakerService.speakers.forEach(speaker=>this.currentSpeakers.includes(speaker._id)? this.eventService.event.otherSpeakers.push(speaker) : null);
    this.studentService.students.forEach(student=>this.currentStudents.includes(student._id)? this.eventService.event.students.push(student) : null);
    this.eventService.updateEvent();
    this.nav.navigate(['/Events']);
    this.currentSpeakers = [];
    this.currentStudents = [];
    this.ngOnInit();
  }
  DateParse(dateString:any){
    this.eventService.event.date = new Date(dateString);
  }
  
  currentTitle:string = "";
  currentSpeakers:number[] = [];
  currentStudents:number[] = [];
}
