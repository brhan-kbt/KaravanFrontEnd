import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryMgtComponent } from './subcategory-mgt.component';

describe('SubcategoryMgtComponent', () => {
  let component: SubcategoryMgtComponent;
  let fixture: ComponentFixture<SubcategoryMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryMgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
