/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewseventsdetailComponent } from './newseventsdetail.component';

describe('NewseventsdetailComponent', () => {
  let component: NewseventsdetailComponent;
  let fixture: ComponentFixture<NewseventsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewseventsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
