import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './../../Modules/login/login.module';
import { NavBarModule } from './../../Modules/nav-bar/nav-bar.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../router/app-routing.module';
import { CommonModule } from '@angular/common';
import { EventModule } from '../event/event.module';
import {TokenInterceptorService} from './../../services/tokenInterceptor/token-interceptor.service';
import { StudentModule } from '../student/student.module';
import { SpeakerModule } from '../speaker/speaker.module';
import { EditProfileModule } from '../edit-profile/edit-profile.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    NavBarModule,
    RouterModule,
    CommonModule,
    EventModule,
    StudentModule,
    SpeakerModule,
    EditProfileModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
