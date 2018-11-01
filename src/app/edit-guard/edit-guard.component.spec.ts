import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuardComponent } from './edit-guard.component';

describe('EditGuardComponent', () => {
  let component: EditGuardComponent;
  let fixture: ComponentFixture<EditGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
