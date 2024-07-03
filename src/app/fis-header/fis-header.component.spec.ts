import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisHeaderComponent } from './fis-header.component';

describe('FisHeaderComponent', () => {
  let component: FisHeaderComponent;
  let fixture: ComponentFixture<FisHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FisHeaderComponent]
    });
    fixture = TestBed.createComponent(FisHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
