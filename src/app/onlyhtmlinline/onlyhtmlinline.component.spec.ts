import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyhtmlinlineComponent } from './onlyhtmlinline.component';

describe('OnlyhtmlinlineComponent', () => {
  let component: OnlyhtmlinlineComponent;
  let fixture: ComponentFixture<OnlyhtmlinlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyhtmlinlineComponent]
    });
    fixture = TestBed.createComponent(OnlyhtmlinlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
