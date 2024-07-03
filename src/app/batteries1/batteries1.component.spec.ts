import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batteries1Component } from './batteries1.component';

describe('Batteries1Component', () => {
  let component: Batteries1Component;
  let fixture: ComponentFixture<Batteries1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Batteries1Component]
    });
    fixture = TestBed.createComponent(Batteries1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
