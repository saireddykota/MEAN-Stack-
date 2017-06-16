import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable()
export class JobService {

  serverUrl = "http://localhost:3000/api";
  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});

  createPost(post:Job): Observable<any>{
      let url = this.serverUrl + "/jobs";
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }
}
