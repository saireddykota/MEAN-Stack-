import { Component, OnInit } from '@angular/core';
import { ResumeService } from "../resume.service";
import { Resume } from "../resume";
import { Router } from '@angular/router';
import {ResumeComponent} from "../resume.component";

@Component({
  selector: 'app-resumedata',
  templateUrl: './resumedata.component.html',
  styleUrls: ['./resumedata.component.css'],
  providers: [ResumeService],
})
export class ResumedataComponent implements OnInit {

    title: string = "List";
    resumes: Resume[] = [];
      // date: Date = new Date;

    //Sorting Data
    order: string = 'firstname';
    reverse: boolean = false;

    setOrder(value: string) {
      if (this.order === value) {
        this.reverse = !this.reverse;
      }
       this.order = value;
    }
  constructor(private resumeService: ResumeService,private router: Router) { }

  ngOnInit() {

    this.resumeService.getPosts().subscribe(res => {
      console.log(res);
      this.resumes = res as Resume[];
    }, err => {
      console.log(err);
    })
  }
  delete(resume: Resume) {
  
  this.resumeService.delete(resume) .then(() => {
       
        this.resumes = this.resumes.filter(resumes => resumes !== resume);
        if (this.resumes == resume) 
        { 
          this.resumes = null; 
          console.log(this.resumes);
        }
      });
}
}
