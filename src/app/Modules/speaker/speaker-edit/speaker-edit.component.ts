import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit {

  constructor(public speakerService:SpeakerService, public router:ActivatedRoute, public nav:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.speakerService.getSpeaker(params['_id'])
    })
  }
  
  updateSpeaker():void{
    this.speakerService.updateSpeaker();
    this.nav.navigate(['/Speakers']);
  }
}
