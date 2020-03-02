import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  section : string = "DMWM";
  hd : boolean = true;
  color = "pink"
  constructor() { }

  ngOnInit() {
  }

  swipeHidden() {
    this.hd = !this.hd;
  }

  traitementDuPere(m) {
    alert(m)
  }

}
