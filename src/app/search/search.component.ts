import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { Router } from '@angular/router';
import { CvPersonneService } from '../cv-personne.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listPersonne : Personne[] = [];

  constructor(private personneService : CvPersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  searchResult(input) {
    let name = input.value.trim();
    this.personneService.getPersonnesByName(name).subscribe(
      (response) => {
        console.log(response);
        this.listPersonne = response;
      },
      (error) => {
        console.log("Error with GetPersonneByName !");     
      }
    )

  }

  onSelectPerson(p: Personne) {
    this.listPersonne = [];
    this.router.navigate(['/cv', p.id]);

  }

}
