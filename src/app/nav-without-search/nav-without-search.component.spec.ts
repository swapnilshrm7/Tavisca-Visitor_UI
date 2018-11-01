import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWithoutSearchComponent } from './nav-without-search.component';

describe('NavWithoutSearchComponent', () => {
  let component: NavWithoutSearchComponent;
  let fixture: ComponentFixture<NavWithoutSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavWithoutSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWithoutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
