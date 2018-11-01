import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardLogsComponent } from './guard-logs.component';

describe('GuardLogsComponent', () => {
  let component: GuardLogsComponent;
  let fixture: ComponentFixture<GuardLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
