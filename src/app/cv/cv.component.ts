import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[];
  selectedPers : Personne;
  constructor() { }

  ngOnInit() {
    this.listePersonnes = [
      new Personne(1, "nidhal", "jelassi", 35, "enseignant"),
      new Personne(2, "bart", "simpson", 25, "élève", "bart.jpeg"),
      new Personne(3, "marge", "simpson", 50, "ingénieur", "marge.jpg")
    ]
  }

  RecupPersonne(p) {
    this.selectedPers = p;
  }
}
