import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterComponent } from './inverter.component';

describe('InverterComponent', () => {
  let component: InverterComponent;
  let fixture: ComponentFixture<InverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InverterComponent]
    });
    fixture = TestBed.createComponent(InverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
