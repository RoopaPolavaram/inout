import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() ParentData: string = "";
  @Output() childEvent = new EventEmitter();
  constructor() {
    //this.ParentData = "";

   }

  ngOnInit(): void {
  }

  onChange(value: any) {
    this.childEvent.emit(value);
  }

}
