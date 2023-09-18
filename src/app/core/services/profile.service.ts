import { HttpClient, HttpHeaders } from '@angular/common/http'

import { HttpError } from './api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username!: string;
  repoName!: string;
  clientId: string = "c789323b20a2d31dc9fa";
  clientSecret: string = "83e428e5ed1c99fded8ab02686753f74656f9f6b";
  apikey:string='be05ad82ef1dec303061648a172836e81613bc78';
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  async download(url: string, options = {}) {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status !== 200) {
      if (json && json.status) {
        throw new HttpError(json.status, url, JSON.stringify(json));
      } else {
        throw new HttpError(response.status, url, response.statusText);
      }
    }

    return json;
  }

  
  async getUser() {
    return await this.download("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  async getUserRepos() {
    return await this.download('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret +"&per_page=1000");
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}
