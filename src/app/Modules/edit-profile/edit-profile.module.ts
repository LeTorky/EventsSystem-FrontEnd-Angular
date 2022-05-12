import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditSpeakerComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EditSpeakerComponent,
    EditStudentComponent
  ]
})
export class EditProfileModule { }
