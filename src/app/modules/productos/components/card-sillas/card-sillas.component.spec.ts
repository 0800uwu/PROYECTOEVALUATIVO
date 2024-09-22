import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSillasComponent } from './card-sillas.component';

describe('CardSillasComponent', () => {
  let component: CardSillasComponent;
  let fixture: ComponentFixture<CardSillasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSillasComponent]
    });
    fixture = TestBed.createComponent(CardSillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
