import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {
  class1 = false;
  class2 = false;
  class3 = true;
  
  constructor() { }

  ngOnInit() {
  }

  affecterClass() {
    return {
      c1 : false,
      c2 : true,
      c3 : false
    };
  }

  changeClass() {
    if(this.class1) {
      this.class1 = false;
      this.class2 = true;
    }
    else if(this.class2) {
      this.class2 = false;
      this.class3 = true
    }
    else {
      this.class3 = false;
      this.class1 = true
    }
  }

}
