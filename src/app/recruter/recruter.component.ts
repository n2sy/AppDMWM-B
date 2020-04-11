import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  listeRecrues : Personne[];
  constructor(private recrueService : RecrueService) { }

  ngOnInit() {
    this.listeRecrues = this.recrueService.listeRecrues;
  }

}
