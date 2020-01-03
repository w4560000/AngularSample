import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksParentComponent } from './lifecycle-hooks-parent.component';

describe('LifecycleHooksParentComponent', () => {
  let component: LifecycleHooksParentComponent;
  let fixture: ComponentFixture<LifecycleHooksParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHooksParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHooksParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
