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
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg", "candidat"),
    new Personne(2, "bart", "simpson", 25, "élève", "bart.jpeg", "candidat"),
    new Personne(3, "marge", "simpson", 50, "ingénieur", "marge.jpg", "refuse"),
    new Personne(4, "homer", "simpson", 50, "comptable", "homer.jpg", "recrute"),
    new Personne(3, "houssem", "kabboudi", 25, "etudiant", "avatar.jpg", "recrute")
  ];

  filterPersonne(tab, property) {
    return tab.filter((c) => c.status == property);
  }

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

  getPersonnesByName(name : string) : Observable<Personne[]>  {
    const filterValue = `{"where":{"prenom":{"like":"%${name}%"}}}`;
    const p = new HttpParams().set('filter', filterValue);

    return this.http.get<Personne[]>(this.link, {params : p});
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
