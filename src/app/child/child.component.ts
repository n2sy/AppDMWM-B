import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() cl : string;
  @Output() msg = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendMsg() {
    this.msg.emit('Ceci est un message du fils');
  }

}
