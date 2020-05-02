import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/userssss";
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    
  }

  CallGet() {
    return this.httpClient.get(this.link);
  }

  getUsers() {
    this.CallGet().subscribe(
      (response) => {
        console.log(response);     
      }
    ),
      (error) => console.log('Error with GET ', error);
      
  }

}
