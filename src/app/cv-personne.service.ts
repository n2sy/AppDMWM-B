import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvPersonneService {
  link = "http://localhost:3000/api/personnes";
  listePersonnes = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 25, "élève", "bart.jpeg"),
    new Personne(3, "marge", "simpson", 50, "ingénieur", "marge.jpg")
  ]

  constructor(private http : HttpClient) { }

  getListePersonneAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getListePersonne() {
    return this.listePersonnes;
  }

  addPersonneAPI(p) : Observable<any> {
    //const token = localStorage.getItem('token');
    // if(token) {
    //   //je vais préparer un HttpParams
    //   let params = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, p, {params});
    // }
    return this.http.post(this.link, p);
  }

  addPersonne(p) {
    p.id = this.listePersonnes[this.listePersonnes.length - 1].id + 1;
    this.listePersonnes.push(p);
  }

  //http://localhost:3000/api/personnes/id
  getPersonneByIdAPI(id) : Observable<Personne> {
    return this.http.get<Personne>(`${this.link}/${id}`) 
    //return this.http.get<Personne>(this.link + '/' + id`) 
  }

  getPersonneById(id) : Personne {
    return this.listePersonnes.find((p) => p.id == id);
  }

  deletePersonneAPI(id) : Observable<any> {
    return this.http.delete(`${this.link}/${id}`);
  }

  deletePersonne(p) {
    let indicePersToDelete = this.listePersonnes.indexOf(p);
    this.listePersonnes.splice(indicePersToDelete, 1);
  }

  updatePersonneAPI(p) : Observable<any>{
    return this.http.put(this.link, p);
  }
   updatePersonne(p) {
    let i = this.listePersonnes.indexOf(p);
    this.listePersonnes[i] = p;
  }


}
