/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewseventslistComponent } from './newseventslist.component';

describe('NewseventslistComponent', () => {
  let component: NewseventslistComponent;
  let fixture: ComponentFixture<NewseventslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewseventslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
