import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { CvPersonneService } from '../cv-personne.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[];
  selectedPers : Personne;

  constructor(private cvPersonne : CvPersonneService) { }

  ngOnInit() {
    this.cvPersonne.getListePersonne();
  }

  RecupPersonne(p) {
    this.selectedPers = p;
  }
}
