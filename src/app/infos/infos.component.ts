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
        //this.pers = this.cvService.getPersonneById(params['id']);
        this.cvService.getPersonneByIdAPI(params['id']).subscribe(
          (response : Personne) => {
            this.pers = response;
          },
          (error) => {
            console.log("Error with ByID !")
          }
        )        
        },
        (error) => {
          console.log("Error with Params...");
        }
    );

  }

  updatePerson() {
    console.log('update personne')
    this.router.navigate(['cv/edit', this.pers.id])
  }

  deletePerson() {
    if(confirm('Voulez-vous vraiment supprimer cette personne ?'))
    {
      //this.cvService.deletePersonne(this.pers);
      this.cvService.deletePersonneAPI(this.pers['id']).subscribe(
        (response) => {
          console.log("DELETE Successful");
          this.router.navigate(['cv']);
        },
        (error) => {
          console.log(error);
          
        }
      )
      
    }
  }

}
