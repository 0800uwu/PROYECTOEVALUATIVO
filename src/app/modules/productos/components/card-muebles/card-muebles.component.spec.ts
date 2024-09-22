import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMueblesComponent } from './card-muebles.component';

describe('CardMueblesComponent', () => {
  let component: CardMueblesComponent;
  let fixture: ComponentFixture<CardMueblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMueblesComponent]
    });
    fixture = TestBed.createComponent(CardMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
