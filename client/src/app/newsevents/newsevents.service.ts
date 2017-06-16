import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Newsevents } from './newsevents';

@Injectable()
export class NewseventsService {

  serverUrl = "http://localhost:3000/api";
  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});

  getNewseventss(): Observable<Newsevents[]>{
    let url = this.serverUrl + "/newsevents?filter[where][status]=1&filter[where][type]=2";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });
  }
  getNewsevents(id: string): Observable<Newsevents>{

    let url = this.serverUrl + "/newsevents/" + id;
    return this.http.get(url, {headers: this.headers}).map( res => res.json() as Newsevents).catch(err => {
      return Observable.throw(err);
    });
  }
  createPost(post: Newsevents): Observable<any>{
    let url = this.serverUrl + "/newsevents";
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }
}
