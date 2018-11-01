import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueGuardsComponent } from './unique-guards.component';

describe('UniqueGuardsComponent', () => {
  let component: UniqueGuardsComponent;
  let fixture: ComponentFixture<UniqueGuardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueGuardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
