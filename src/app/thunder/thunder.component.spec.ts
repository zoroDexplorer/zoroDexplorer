import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThunderComponent } from './thunder.component';

describe('ThunderComponent', () => {
  let component: ThunderComponent;
  let fixture: ComponentFixture<ThunderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThunderComponent]
    });
    fixture = TestBed.createComponent(ThunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
