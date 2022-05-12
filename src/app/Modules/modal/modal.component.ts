import { style } from '@angular/animations';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor() { }
  @Output()
  alertEmitter = new EventEmitter(); 
  dispose(){
    this.alertEmitter.emit();
  }
  ngOnInit(): void {
  }

}
