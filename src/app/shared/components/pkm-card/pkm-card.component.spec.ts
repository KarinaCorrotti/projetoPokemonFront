import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmCardComponent } from './pkm-card.component';

describe('PkmCardComponent', () => {
  let component: PkmCardComponent;
  let fixture: ComponentFixture<PkmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
