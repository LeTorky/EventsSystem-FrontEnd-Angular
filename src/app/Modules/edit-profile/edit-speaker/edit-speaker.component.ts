import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit {

  constructor(public speakerService:SpeakerService, public nav:Router, public loginService:LoginService) { }

  ngOnInit(): void {
    let profile:any = JSON.parse(localStorage.getItem("profile") as any);
    this.speakerService.speaker._id = profile._id;
    this.speakerService.speaker.email = profile.email;
    this.speakerService.speaker.userName = profile.userName;
    this.speakerService.speaker.address.building = profile.address.building;
    this.speakerService.speaker.address.city = profile.address.city;
    this.speakerService.speaker.address.street = profile.address.street;
    this.speakerService.passWord = profile.passWord;
  }
  
  updateSpeaker():void{
    this.speakerService.updateSpeakerBySpeaker();
    let profile = {
      _id : this.speakerService.speaker._id,
      email : this.speakerService.speaker.email,
      userName : this.speakerService.speaker.userName,
      address : {
        building:this.speakerService.speaker.address.building,
        city:this.speakerService.speaker.address.city,
        street:this.speakerService.speaker.address.street,
      },
      passWord:this.speakerService.passWord
    }
    localStorage.setItem("profile",JSON.stringify(profile));
    this.nav.navigate(['/']);
  }
}
