import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { EventComponent } from '../event/event.component';
import { SpeakerComponent } from '../speaker/speaker.component';
import { StudentEditComponent } from '../student/student-edit/student-edit.component';
import { StudentComponent } from '../student/student.component';
import { SpeakerEditComponent } from '../speaker/speaker-edit/speaker-edit.component';
import { EditEventComponent } from '../event/edit-event/edit-event.component';
import { EditSpeakerComponent } from '../edit-profile/edit-speaker/edit-speaker.component';
import { EditStudentComponent } from '../edit-profile/edit-student/edit-student.component';

const routes: Routes = [
{path:"Events", component:EventComponent},
{path:"Speakers", component:SpeakerComponent},
{path:"Students", component:StudentComponent},
{path:"Students/Edit/:_id", component:StudentEditComponent},
{path:"Speakers/Edit/:_id", component:SpeakerEditComponent},
{path:"Events/Edit/:_id", component:EditEventComponent},
{path:"ProfileSpeaker", component:EditSpeakerComponent},
{path:"ProfileStudent", component:EditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
