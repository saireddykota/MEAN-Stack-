import { Component, OnInit } from '@angular/core';
import { Job } from './job';
import { JobService } from './job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrls: ['./postajob.component.css'],
  providers: [JobService]
})
export class PostajobComponent implements OnInit {
  post: Job = new Job();
  errorMessage = "";

  constructor(
    private jobService: JobService,

  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.jobService.createPost(this.post).subscribe(res => {
      console.log(res.id);
      this.post ="Successfully posted a job";


    }, err => {
      console.log(err);
      this.errorMessage = "An error saving the job";
    })
  }
}
