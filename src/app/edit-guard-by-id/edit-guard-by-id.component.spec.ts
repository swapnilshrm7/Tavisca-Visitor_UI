import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuardByIdComponent } from './edit-guard-by-id.component';

describe('EditGuardByIdComponent', () => {
  let component: EditGuardByIdComponent;
  let fixture: ComponentFixture<EditGuardByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGuardByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuardByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
