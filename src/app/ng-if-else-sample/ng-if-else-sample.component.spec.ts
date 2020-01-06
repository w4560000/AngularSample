import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfElseSampleComponent } from './ng-if-else-sample.component';

describe('NgIfElseSampleComponent', () => {
  let component: NgIfElseSampleComponent;
  let fixture: ComponentFixture<NgIfElseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfElseSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfElseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
