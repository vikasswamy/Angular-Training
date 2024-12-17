import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStandaloneCompComponent } from './new-standalone-comp.component';

describe('NewStandaloneCompComponent', () => {
  let component: NewStandaloneCompComponent;
  let fixture: ComponentFixture<NewStandaloneCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewStandaloneCompComponent]
    });
    fixture = TestBed.createComponent(NewStandaloneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
