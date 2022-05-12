import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  constructor(public speakerService:SpeakerService) { }

  ngOnInit(): void {
    this.speakerService.getSpeakers();
  }

  showConfirm(speaker:any):void{
    this.speakerService.speaker = speaker;
    let modal = document.getElementsByTagName("app-confirm");
    (modal[0] as any).style.display="block";
  }

  confirm(event:boolean):void{
    event == true ? this.speakerService.deleteSpeaker() : null;
    let modal = document.getElementsByTagName("app-confirm");
    (modal[0] as any).style.display="none";
  }
}
