/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewseventsComponent } from './newsevents.component';

describe('NewseventsComponent', () => {
  let component: NewseventsComponent;
  let fixture: ComponentFixture<NewseventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewseventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
