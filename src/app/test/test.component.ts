import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input() prop1:String ;
  @Output() prop3 = new EventEmitter();
  
  notif(){
    this.prop3.emit();

  }
}
