import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  listeFonts = ['', 'Impact', 'Garamond', 'Comic Sans MS'];
  bgcolor : string;
  cl : string;
  size : string;
  font : string
  constructor() { }

  ngOnInit() {
  }

  changeSize(newSize) {
    this.size = newSize + 'px';
  }

}
