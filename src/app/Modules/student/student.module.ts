import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {RouterModule, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmModule } from '../confirm/confirm.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ConfirmModule
  ],
  exports:[
    StudentComponent,
    StudentEditComponent,
  ]
})
export class StudentModule { }
