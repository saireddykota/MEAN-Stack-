import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { CustomFormsModule} from  'ng2-validation';
import { Ng2PaginationModule } from 'ng2-pagination';

import { Ng2OrderModule} from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { PostajobComponent } from './postajob/postajob.component';
import { Routes, RouterModule } from '@angular/router';
import { NewseventsComponent } from './newsevents/newsevents.component';

import { ResumeComponent } from './resume/resume.component';
import { ResumedataComponent } from './resume/resumedata/resumedata.component';


import { BrowseajobComponent } from './browseajob/browseajob.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';

import { NewseventslistComponent } from './newsevents/newseventslist/newseventslist.component';
import { NewseventsdetailComponent } from './newsevents/newseventsdetail/newseventsdetail.component';

import { AppConfig } from './app.config';






const appRoutes : Routes = [
   
  { path: 'postajob', component: PostajobComponent},
  { path: 'newsevents', component: NewseventsComponent},
  { path: 'newseventslist', component: NewseventslistComponent},
  { path: 'newseventsdetail/:id', component: NewseventsdetailComponent},
  { path: 'resume', component: ResumeComponent},
  

  { path: 'resumelist', component: ResumedataComponent},
 

  
  { path: 'itjobs', component: BrowseajobComponent },
  { path: 'desc', component: JobdescriptionComponent },
  

 


];
@NgModule({
  declarations: [
    AppComponent,
    PostajobComponent,
    NewseventsComponent,
    
    ResumeComponent,
    ResumedataComponent,
    BrowseajobComponent,
    JobdescriptionComponent,
    
    NewseventslistComponent,
    NewseventsdetailComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomFormsModule,
    Ng2PaginationModule,
    Ng2OrderModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
