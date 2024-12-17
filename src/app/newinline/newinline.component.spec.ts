import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinlineComponent } from './newinline.component';

describe('NewinlineComponent', () => {
  let component: NewinlineComponent;
  let fixture: ComponentFixture<NewinlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewinlineComponent]
    });
    fixture = TestBed.createComponent(NewinlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
