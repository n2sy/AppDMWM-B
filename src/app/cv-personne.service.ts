import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvPersonneService {

  listePersonnes = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant"),
    new Personne(2, "bart", "simpson", 25, "élève", "bart.jpeg"),
    new Personne(3, "marge", "simpson", 50, "ingénieur", "marge.jpg")
  ]

  constructor() { }

  getListePersonne() {
    return this.listePersonnes;
  }

  addPersonne() {
    this.listePersonnes.push(new Personne(1, "New", "Personne", 35, "enseignant"))
  }

  getPersonneById(id) : Personne {
    return this.listePersonnes.find((p) => p.id == id);
  }


}
