import { Component, OnInit } from '@angular/core';
import { CvPersonneService } from '../cv-personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cvService : CvPersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  addPersonne(newPers) {
    //this.cvService.addPersonne(newPers);
    this.cvService.addPersonneAPI(newPers).subscribe(
      (response) => {
        console.log("POST Successful !");
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log("Error with POST ", error);
        
      }
    )

    
  }

}