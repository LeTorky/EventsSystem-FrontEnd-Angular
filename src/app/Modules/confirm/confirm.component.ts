import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { }
  @Output()
  confirmEmitter = new EventEmitter(); 
  confirm(flag:boolean):void{
    this.confirmEmitter.emit(flag)
  }
  ngOnInit(): void {
  }

}
