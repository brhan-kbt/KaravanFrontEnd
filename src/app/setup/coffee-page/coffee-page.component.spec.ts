import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePageComponent } from './coffee-page.component';

describe('CoffeePageComponent', () => {
  let component: CoffeePageComponent;
  let fixture: ComponentFixture<CoffeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
