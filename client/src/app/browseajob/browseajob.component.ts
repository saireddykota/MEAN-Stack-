import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostjobService } from './postjob.service';
import { Postjob } from './postjob';

@Component({
  selector: 'app-browseajob',
  templateUrl: './browseajob.component.html',
  styleUrls: ['./browseajob.component.css'],
  providers: [PostjobService]
})
export class BrowseajobComponent implements OnInit {
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

   delete(postjob: Postjob) {
  
  this.postjobService.delete(postjob) .then(() => {
       
        this.postjobs = this.postjobs.filter(postjobs => postjobs !== postjob);
        if (this.postjobs == postjob) 
        { 
          this.postjobs = null; 
          console.log(this.postjobs);
        }
      });
}

}
