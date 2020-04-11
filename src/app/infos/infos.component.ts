import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private cvService : CvPersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.pers = this.cvService.getPersonneById(params['id']);
      }
    )

  }

}
