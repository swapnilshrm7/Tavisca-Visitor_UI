import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNewPasswordComponent } from './ask-new-password.component';

describe('AskNewPasswordComponent', () => {
  let component: AskNewPasswordComponent;
  let fixture: ComponentFixture<AskNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
