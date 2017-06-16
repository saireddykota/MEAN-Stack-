import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Resume } from './resume';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResumeService {

  serverUrl = "http://localhost:3000/api";

  constructor(private http: Http) { }
   headers = new Headers({'Content-Type': 'application/json'});

  getPosts(): Observable<Resume[]>{
    let url = this.serverUrl + "/resume";
    
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

  createPost(post: Resume): Observable<any>{
    let url = this.serverUrl + "/resume";

    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }
  delete(resume: Resume): Promise<void> {
      const url = this.serverUrl + "/resume/"+resume.id;
      console.log(resume.id);
      console.log(resume);
    return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(err => {
      return Observable.throw(err);
    });
}

}
