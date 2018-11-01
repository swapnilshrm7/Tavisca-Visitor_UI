import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVisitorsComponent } from './unique-visitors.component';

describe('UniqueVisitorsComponent', () => {
  let component: UniqueVisitorsComponent;
  let fixture: ComponentFixture<UniqueVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
