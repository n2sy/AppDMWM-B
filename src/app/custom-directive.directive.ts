import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('style.backgroundColor') bgcolor:string="red";

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bgcolor = "blue";
  }

  @HostListener('mouseleave') mouseleave() {
    this.bgcolor = "red"
  }

}
