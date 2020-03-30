import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-dir',
  templateUrl: './test-dir.component.html',
  styleUrls: ['./test-dir.component.css']
})
export class TestDirComponent implements OnInit {
  @Input() bgcolor : string;
  @Input() cl : string;
  constructor() { }

  ngOnInit() {
  }

}
