import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardSideNavComponent } from './guard-side-nav.component';

describe('GuardSideNavComponent', () => {
  let component: GuardSideNavComponent;
  let fixture: ComponentFixture<GuardSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
