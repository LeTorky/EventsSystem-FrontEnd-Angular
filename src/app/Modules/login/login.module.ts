import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { RegisterModule } from '../register/register.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    RegisterModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
