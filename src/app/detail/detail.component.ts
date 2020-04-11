import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers : Personne;
  //desactive : boolean = false;
  
  constructor(private recrueService : RecrueService,
    private router : Router) { }

  ngOnInit() {
  }

  addRecrue() {
    this.recrueService.ajouterRecrue(this.pers);
    //console.log(this.recrueService.listeRecrues);
    //this.desactive = true;
  }

  checkRecrue() {
    return this.recrueService.isRecrue(this.pers);
  }

  plusDetails() {
    this.router.navigate(['cv', this.pers.id]);
  }

}
