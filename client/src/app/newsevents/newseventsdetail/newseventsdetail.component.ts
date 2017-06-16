import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router'
import {NewseventsService } from '../newsevents.service';
import { Newsevents } from '../newsevents'



@Component({
  selector: 'app-newseventsdetail',
  templateUrl: './newseventsdetail.component.html',
  styleUrls: ['./newseventsdetail.component.css'],
   providers: [NewseventsService]
})
export class NewseventsdetailComponent implements OnInit {


newsevents: Newsevents = new Newsevents();


  constructor(
    protected newseventsService: NewseventsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
         this.route.params.switchMap((params: Params) => {
      let id = params['id'];
      return this.newseventsService.getNewsevents(id);
    }).subscribe(response => {

      this.newsevents = response;

    }, err => {
        console.log(err);
    });



  }

}
