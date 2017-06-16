import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Postjob } from './postjob';

@Injectable()
export class PostjobService {
  serverUrl = "http://localhost:3000/api";

  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});
  getPostjobs(): Observable<Postjob[]>{
    let url = this.serverUrl + "/jobs";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

    getPostjob(): Observable<Postjob>{

    let url = this.serverUrl + "/jobs/";
    return this.http.get(url, {headers: this.headers}).map( res => res.json() as Postjob).catch(err => {
      return Observable.throw(err);
    });
  }

}
