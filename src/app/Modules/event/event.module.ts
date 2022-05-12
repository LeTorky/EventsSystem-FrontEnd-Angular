import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventService } from 'src/app/services/event/event.service';
import { EditEventComponent } from './edit-event/edit-event.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmModule } from '../confirm/confirm.module';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    EventComponent,
    EditEventComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ConfirmModule
  ]
})
export class EventModule { 
  constructor(public eventService:EventService){
    eventService.getEvents();
  }
}
