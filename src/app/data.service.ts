import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  serviceClick(firstUser) {
    return console.log('First User is ', firstUser.data[0].first_name);
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
    // return this.http.get('http://jsonplaceholder.typicode.com/users');
	}

  getColors() {
    return this.http.get('https://reqres.in/api/unknown');
	}
	
	getPosts() {
		return this.http.get('http://jsonplaceholder.typicode.com/posts');
	}

}
