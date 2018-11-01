import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSideNavComponent } from './visitor-side-nav.component';

describe('VisitorSideNavComponent', () => {
  let component: VisitorSideNavComponent;
  let fixture: ComponentFixture<VisitorSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
