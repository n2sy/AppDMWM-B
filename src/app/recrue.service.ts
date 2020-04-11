import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class RecrueService {
  listeRecrues : Personne[] = [];

  constructor() { }

  ajouterRecrue(p: Personne) {
    console.log('ajout ', this.listeRecrues.indexOf(p))
    if(this.listeRecrues.indexOf(p) > -1)
      alert('Cette personne a déjà été recrutée')
    else
      this.listeRecrues.push(p);
  }

  isRecrue(p : Personne) {
    console.log('isRecrue ', this.listeRecrues.indexOf(p))

    if(this.listeRecrues.indexOf(p) > -1)
      return true;
    return false;
  }
}
