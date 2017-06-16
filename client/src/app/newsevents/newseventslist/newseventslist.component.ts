import { Component, OnInit } from '@angular/core';
import { NewseventsService } from '../newsevents.service';
import { Router }  from '@angular/router'
import { Newsevents } from '../newsevents'
@Component({
  selector: 'app-newseventslist',
  templateUrl: './newseventslist.component.html',
  styleUrls: ['./newseventslist.component.css'],
  providers: [NewseventsService]
})
export class NewseventslistComponent implements OnInit {

     private NEWS = require('./news.jpg');
     private NEWS2 = require('./newsevents.jpg');
     newseventss: Newsevents[] = [];
    
  constructor(
    private newseventsService: NewseventsService,
    private router: Router
  ) { }

  ngOnInit() {
       this.newseventsService.getNewseventss().subscribe(res => {
      console.log(res);
      this.newseventss = res as Newsevents[];
    }, err => {
        console.log(err);
    })



}

}
