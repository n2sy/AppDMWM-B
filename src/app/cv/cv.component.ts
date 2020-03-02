import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[];
  constructor() { }

  ngOnInit() {
    this.listePersonnes = [
      new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
      new Personne(2, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
      new Personne(3, "nidhal", "jelassi", 35, "enseignant")
    ]
  }

}
