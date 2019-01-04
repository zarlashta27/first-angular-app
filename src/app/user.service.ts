//This file is meant to contact the github api

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Define our class properties. apiUrl is what we need
  apiUrl = 'https://api.github.com/users';


  //Inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) { }

  //Return what comes back from this http call
  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}`); 
  }
  
}
