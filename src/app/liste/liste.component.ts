import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';
import { CvPersonneService } from '../cv-personne.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  listePersonnes : Personne[];
  @Output() sendPers = new EventEmitter<Personne>()
  
  constructor(private cvPersonne : CvPersonneService) { }

  ngOnInit() {
    this.listePersonnes = this.cvPersonne.getListePersonne();
  }

  sendToCv(p : Personne) {
    this.sendPers.emit(p);
  }

  consoleListe() {
    console.log(this.cvPersonne.getListePersonne());
  }
  

}
