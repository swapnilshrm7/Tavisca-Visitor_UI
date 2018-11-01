import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueEmployeesComponent } from './unique-employees.component';

describe('UniqueEmployeesComponent', () => {
  let component: UniqueEmployeesComponent;
  let fixture: ComponentFixture<UniqueEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
