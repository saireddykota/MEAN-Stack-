/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostajobComponent } from './postajob.component';

describe('PostajobComponent', () => {
  let component: PostajobComponent;
  let fixture: ComponentFixture<PostajobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostajobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostajobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
