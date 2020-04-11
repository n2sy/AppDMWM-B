import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  section : string = "DMWM";
  hd : boolean = true;
  color = "pink";

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.color = params['cl']; 
      }
    )
  }

  swipeHidden() {
    this.hd = !this.hd;
  }

  traitementDuPere(m) {
    alert(m)
  }

}
