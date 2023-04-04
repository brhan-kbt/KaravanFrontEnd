import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakePageComponent } from './cake-page.component';

describe('CakePageComponent', () => {
  let component: CakePageComponent;
  let fixture: ComponentFixture<CakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
