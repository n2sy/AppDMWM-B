import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link="http://localhost:3000/api/Users/login"

  constructor(private http : HttpClient) { }

  seConnecter(credentials) {
    return this.http.post(this.link, credentials);
  }
}
