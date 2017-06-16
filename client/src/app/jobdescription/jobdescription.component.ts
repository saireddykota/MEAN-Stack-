import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostjobService } from './postjob.service';
import { Postjob } from './postjob';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css'],
  providers: [PostjobService]
})
export class JobdescriptionComponent implements OnInit {
  title: string = "Browse Jobs";
  postjobs: Postjob[] = [];
  constructor(
      private postjobService: PostjobService,
      private router: Router   
  ) { }

  ngOnInit() {
       this.postjobService.getPostjobs().subscribe(res => {
      console.log(res);
      this.postjobs = res as Postjob[];
    }, err => {
        console.log(err);
    })
  }

}
