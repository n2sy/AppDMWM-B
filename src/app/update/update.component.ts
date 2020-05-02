import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CvPersonneService } from '../cv-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute: ActivatedRoute,
    private cvService : CvPersonneService,
    private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (p: Params) => {
        this.cvService.getPersonneByIdAPI(p['id']).subscribe(
          (p : Personne) => {
            this.pers = p;
          },
          (error) => {
            console.log(error);
          }
        )
      }
    )
  }

  updateCV() {
    //this.cvService.updatePersonne(this.pers);
    this.cvService.updatePersonneAPI(this.pers).subscribe(
      (response) => {
        console.log("PUT Successful");
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log("Error with PUT");
        
      }
    )
  }

}
