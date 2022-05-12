import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './speaker.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmModule } from '../confirm/confirm.module';

@NgModule({
  declarations: [
    SpeakerComponent,
    SpeakerEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ConfirmModule
  ],
  exports:[
    SpeakerComponent,
    SpeakerEditComponent,
  ]
})
export class SpeakerModule { }
