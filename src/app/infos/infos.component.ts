import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Personne } from '../model/personne';
import { CvPersonneService } from '../cv-personne.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private cvService : CvPersonneService) { }

  ngOnInit() {
    //let i = this.activatedRoute.snapshot.params['id'];
    //this.pers = this.cvService.getPersonneById(i);

    this.activatedRoute.params.subscribe(
      (params : Params) => {
        this.pers = this.cvService.getPersonneById(params['id']);
          console.log(params['id']);
        }
    );

  }

  updatePerson() {
    console.log('update personne')
    this.router.navigate(['cv/edit', this.pers.id])
  }

}
